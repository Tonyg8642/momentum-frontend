function Cart({ selectedItems, onRemoveFromCart }) {
  const total = selectedItems.reduce(
    (sum, item) => sum + Number(item.price),
    0,
  );

  return (
    <main className="cart">
      <h1 className="cart__title">Your Cart</h1>

      {selectedItems.length === 0 ? (
        <p className="cart__empty">Your cart is empty.</p>
      ) : (
        <>
          <p className="cart__count">
            {selectedItems.length} item{selectedItems.length !== 1 ? "s" : ""}
          </p>

          <section className="cart__list">
            {selectedItems.map((item, index) => {
              const itemKey = `${item.id}-${index}`;
              const imageSrc =
                item.images?.[0] ||
                item.image ||
                "https://via.placeholder.com/150?text=No+Image";

              return (
                <div key={itemKey} className="cart__item">
                  <img
                    className="cart__item-image"
                    src={imageSrc}
                    alt={item.title}
                  />

                  <div className="cart__item-info">
                    <h2 className="cart__item-title">{item.title}</h2>
                    <p className="cart__item-price">${item.price}</p>
                  </div>

                  <button
                    type="button"
                    className="cart__item-remove"
                    onClick={() => onRemoveFromCart(itemKey)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </section>

          <div className="cart__footer">
            <span className="cart__total">Total: ${total.toFixed(2)}</span>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;
