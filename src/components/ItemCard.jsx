function ItemCard({ item }) {
  return (
    <article className="card">
      <img
        className="card__image"
        src={item.image || "https://via.placeholder.com/400x300?text=No+Image"}
        alt={item.title}
      />
      <div className="card__content">
        <h3 className="card__title">{item.title}</h3>
        <p className="card__category">{item.category?.name || "No category"}</p>
        <p className="card__price">${item.price}</p>
      </div>
    </article>
  );
}

export default ItemCard;
