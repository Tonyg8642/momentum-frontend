import ItemCard from "./ItemCard";

function Main({ items }) {
  return (
    <main>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </main>
  );
}

export default Main;