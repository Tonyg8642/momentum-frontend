import ItemCard from "../ItemCard/ItemCard";

function Main({
  items,
  isLoading,
  error,
  onShowMore,
  hasMore,
  searchTerm,
  onAddToCart,
  isLoggedIn,
  onLoginClick,
}) {
  return (
    <main className="main">
      <h1 className="main__title">Discover Items</h1>

      {!isLoggedIn ? (
        <p className="main__status">
          Please{" "}
          <button
            className="main__login-link"
            type="button"
            onClick={onLoginClick}
          >
            sign in
          </button>{" "}
          to view items.
        </p>
      ) : (
        <>
          {isLoading && <p className="main__status">Loading items...</p>}

          {error && (
            <p className="main__status" style={{ whiteSpace: "pre-line" }}>
              {error}
            </p>
          )}

          {!isLoading && !error && items.length === 0 && (
            <p className="main__status">Nothing found.</p>
          )}

          <section className="main__grid">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} onAddToCart={onAddToCart} />
            ))}
          </section>

          {!isLoading && !error && hasMore && items.length > 0 && (
            <button
              className="main__more-button"
              type="button"
              onClick={onShowMore}
            >
              Show More
            </button>
          )}
        </>
      )}
    </main>
  );
}

export default Main;
