import Modal from "../Modal/Modal";

function SignOutModal({ onClose, onConfirmSignOut }) {
  return (
    <Modal title="Sign Out Confirmation" onClose={onClose}>
      <div className="modal__form">
        <p>Are you sure you want to sign out?</p>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            className="modal__submit"
            type="button"
            onClick={onConfirmSignOut}
            style={{ backgroundColor: "#dc3545", borderColor: "#dc3545" }}
          >
            Yes
          </button>
          <button
            className="modal__submit"
            type="button"
            onClick={onClose}
            style={{ backgroundColor: "#6c757d", borderColor: "#6c757d" }}
          >
            No
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default SignOutModal;
