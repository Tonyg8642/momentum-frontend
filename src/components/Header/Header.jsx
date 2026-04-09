import "./Header.css";
import { Link } from "react-router-dom";

function Header({
  onLoginClick,
  onAddClick,
  cartCount,
  isLoggedIn,
  currentUser,
  onLogout,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <header className="header">
      <div className="header__logo">Momentum</div>

      <input
        className="header__search"
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <nav className="header__nav">
        <Link className="header__button" to="/">
          Home
        </Link>

        {!isLoggedIn ? (
          <button
            className="header__button"
            type="button"
            onClick={onLoginClick}
          >
            Sign In
          </button>
        ) : (
          <button className="header__button" type="button" onClick={onLogout}>
            Sign Out
          </button>
        )}

        <button
          className="header__button header__button_primary"
          type="button"
          onClick={onAddClick}
        >
          Add Item
        </button>

        <Link className="header__button" to="/cart">
          Cart ({cartCount})
        </Link>

        {isLoggedIn && (
          <div className="header__avatar">
            {currentUser?.name?.[0]?.toUpperCase() || "T"}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
