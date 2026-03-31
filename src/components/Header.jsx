function Header({ onLoginClick, onAddClick }) {
  return (
    <header className="header">
      <div className="header__logo">Momentum</div>

      <nav className="header__nav">
        <button className="header__button" type="button">
          Home
        </button>
        <button className="header__button" type="button" onClick={onLoginClick}>
          Sign In
        </button>
        <button
          className="header__button header__button_primary"
          type="button"
          onClick={onAddClick}
        >
          Add Item
        </button>
      </nav>
    </header>
  );
}

export default Header;
