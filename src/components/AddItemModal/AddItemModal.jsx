import { useState } from "react";
import Modal from "../Modal/Modal";

function AddItemModal({ onClose, onAddItem }) {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem({ title, imageUrl, category, price: Number(price) });
  }

  return (
    <Modal title="Add Item" onClose={onClose}>
      <form className="modal__form" onSubmit={handleSubmit}>
        <input
          className="modal__input"
          type="text"
          placeholder="Item name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="modal__input"
          type="url"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <input
          className="modal__input"
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          className="modal__input"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button className="modal__submit" type="submit">
          Add Item
        </button>
      </form>
    </Modal>
  );
}

export default AddItemModal;
