function ItemCard({ item }) {
  return (
    <div>
      <img src={item.imageUrl} alt={item.title} width="150" />
      <h2>{item.title}</h2>
      <p>${item.price}</p>
    </div>
  );
}

export default ItemCard;
