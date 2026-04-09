function ItemCard({ item, onAddToCart }) {
  return (
    <div className="card">
      <img className="card__image" src={item.image} alt={item.title} />
      <div className="card__content">
        <h2 className="card__title">{item.title}</h2>
        <p className="card__price">${item.price}</p>
        <button className="card__button" onClick={() => onAddToCart(item)}>
          + Cart
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
