import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./index.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import LoginModal from "./components/LoginModal/LoginModal";
import AddItemModal from "./components/AddItemModal/AddItemModal";
import SignOutModal from "./components/SignOutModal/SignOutModal";

import { getThirdPartyItems } from "./utils/ThirdPartyApi";
import { fallbackItems } from "./utils/Data";
import { authorize, checkToken } from "./utils/auth";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setError("");

    getThirdPartyItems()
      .then((data) => {
        if (data && data.length > 0) {
          setItems(data);
        } else {
          setItems([]);
        }
      })
      .catch(() => {
        setError(
          "Sorry, something went wrong during the request.\nThere may be a connection issue or the server may be down.\nPlease try again later.",
        );
        setItems(fallbackItems);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (!token) return;

    checkToken(token)
      .then((userData) => {
        setIsLoggedIn(true);
        setCurrentUser(userData);
      })
      .catch(() => {
        localStorage.removeItem("jwt");
        setIsLoggedIn(false);
        setCurrentUser(null);
      });
  }, []);

  function openLoginModal() {
    setActiveModal("login");
  }

  function openAddItemModal() {
    setActiveModal("add-item");
  }

  function closeActiveModal() {
    setActiveModal("");
  }

  function openSignOutModal() {
    setActiveModal("sign-out");
  }

  function handleLoginSubmit({ email, password, name }) {
    authorize(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
        setCurrentUser({ name: name || "Tony" });
        closeActiveModal();
      })
      .catch(() => {
        setError("Login failed. Please try again.");
      });
  }

  function handleAddItemSubmit(newItem) {
    const itemWithId = {
      ...newItem,
      id: Date.now(),
    };

    setItems((prevItems) => [itemWithId, ...prevItems]);
    closeActiveModal();
  }

  function handleAddToCart(item) {
    if (!isLoggedIn) {
      openLoginModal();
      return;
    }

    setCartItems((prevItems) => [...prevItems, item]);
  }

  function handleRemoveFromCart(idToRemove) {
    setCartItems((prevItems) =>
      prevItems.filter((item, index) => `${item.id}-${index}` !== idToRemove),
    );
  }

  function handleShowMore() {
    setVisibleCount((prevCount) => prevCount + 3);
  }

  function handleConfirmSignOut() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
    setCartItems([]);
    closeActiveModal();
    navigate("/");
  }

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = filteredItems.length > visibleCount;

  return (
    <div className="app">
      <Header
        onLoginClick={openLoginModal}
        onAddClick={openAddItemModal}
        cartCount={cartItems.length}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onSignOutClick={openSignOutModal}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Main
              items={visibleItems}
              isLoading={isLoading}
              error={error}
              onShowMore={handleShowMore}
              hasMore={hasMore}
              searchTerm={searchTerm}
              onAddToCart={handleAddToCart}
              isLoggedIn={isLoggedIn}
              onLoginClick={openLoginModal}
            />
          }
        />

        <Route
          path="/cart"
          element={
            isLoggedIn ? (
              <Cart
                selectedItems={cartItems}
                onRemoveFromCart={handleRemoveFromCart}
              />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>

      <Footer />

      {activeModal === "login" && (
        <LoginModal onClose={closeActiveModal} onLogin={handleLoginSubmit} />
      )}

      {activeModal === "add-item" && (
        <AddItemModal
          onClose={closeActiveModal}
          onAddItem={handleAddItemSubmit}
        />
      )}

      {activeModal === "sign-out" && (
        <SignOutModal
          onClose={closeActiveModal}
          onConfirmSignOut={handleConfirmSignOut}
        />
      )}
    </div>
  );
}

export default App;
