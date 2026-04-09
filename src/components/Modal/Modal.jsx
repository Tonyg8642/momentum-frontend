function Modal({ title, children, onClose }) {
  return (
    <div className="modal">
      <div
        className="modal__overlay"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div className="modal__content">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <h2 className="modal__title">{title}</h2>

        {children}
      </div>
    </div>
  );
}

export default Modal;
