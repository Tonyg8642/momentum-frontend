import Modal from "./Modal";

function LoginModal({ onClose }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onClose();
  }

  return (
    <Modal title="Sign In" onClose={onClose}>
      <form className="modal__form" onSubmit={handleSubmit}>
        <input
          className="modal__input"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="modal__input"
          type="password"
          placeholder="Password"
          required
        />
        <button className="modal__submit" type="submit">
          Sign In
        </button>
      </form>
    </Modal>
  );
}

export default LoginModal;
