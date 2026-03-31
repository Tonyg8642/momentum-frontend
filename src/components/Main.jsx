import ItemCard from "./ItemCard";
import OutfitPreview from "./Outfitpreview";

function Main({ items }) {
  return (
    <main className="main">
      <section className="items-section">
        <h2 className="section-title">Clothing Items</h2>
        <div className="items-section__grid">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <OutfitPreview />
    </main>
  );
}

export default Main;