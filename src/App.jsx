import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import AddItemModal from "./components/AddItemModal";
import { getThirdPartyItems } from "./utils/ThirdPartyApi";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeModal, setActiveModal] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setError("");

    getThirdPartyItems()
      .then((data) => {
        console.log("FROM THIRD PARTY API:", data);
        setItems(data);
      })
      .catch((err) => {
        console.error("Third-party API error:", err);

        setItems([
          {
            id: 1,
            title: "Classic White T-Shirt",
            price: 25,
            image:
              "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
            category: { name: "Top" },
          },
          {
            id: 2,
            title: "Black Denim Jacket",
            price: 65,
            image:
              "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
            category: { name: "Outerwear" },
          },
          {
            id: 3,
            title: "Beige Cargo Pants",
            price: 48,
            image:
              "https://images.unsplash.com/photo-1506629905607-d9df11cc1ceb?auto=format&fit=crop&w=800&q=80",
            category: { name: "Bottom" },
          },
          {
            id: 4,
            title: "Neutral Sneakers",
            price: 72,
            image:
              "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
            category: { name: "Shoes" },
          },
          {
            id: 5,
            title: "Grey Overshirt",
            price: 54,
            image:
              "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
            category: { name: "Layer" },
          },
          {
            id: 6,
            title: "Relaxed Fit Jeans",
            price: 58,
            image:
              "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
            category: { name: "Denim" },
          },
        ]);

        setError("");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  function handleShowMore() {
    setVisibleCount((prevCount) => prevCount + 3);
  }

  function openLoginModal() {
    setActiveModal("login");
  }

  function openAddItemModal() {
    setActiveModal("add-item");
  }

  function closeActiveModal() {
    setActiveModal("");
  }

  const visibleItems = items.slice(0, visibleCount);

  return (
    <div className="page">
      <Header onLoginClick={openLoginModal} onAddClick={openAddItemModal} />
      <Hero />

      <main className="content">
        {isLoading && <p className="status">Loading...</p>}

        {!isLoading && error && <p className="status error">{error}</p>}

        {!isLoading && !error && items.length === 0 && (
          <p className="status">Nothing found</p>
        )}

        {!isLoading && !error && items.length > 0 && (
          <>
            <Main items={visibleItems} />

            {visibleCount < items.length && (
              <div className="show-more-container">
                <button
                  className="show-more-button"
                  type="button"
                  onClick={handleShowMore}
                >
                  Show more
                </button>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />

      {activeModal === "login" && <LoginModal onClose={closeActiveModal} />}

      {activeModal === "add-item" && (
        <AddItemModal onClose={closeActiveModal} />
      )}
    </div>
  );
}

export default App;
