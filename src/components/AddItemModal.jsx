import Modal from "./Modal";

function AddItemModal({ onClose }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onClose();
  }

  return (
    <Modal title="Add Item" onClose={onClose}>
      <form className="modal__form" onSubmit={handleSubmit}>
        <input
          className="modal__input"
          type="text"
          placeholder="Item name"
          required
        />
        <input
          className="modal__input"
          type="url"
          placeholder="Image URL"
          required
        />
        <input
          className="modal__input"
          type="text"
          placeholder="Category"
          required
        />
        <input
          className="modal__input"
          type="number"
          placeholder="Price"
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
