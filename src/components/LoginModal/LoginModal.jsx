import { useState } from "react";
import Modal from "../Modal/Modal";

function LoginModal({ onClose, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();

    onLogin({ email, password });
  }

  return (
    <Modal title="Sign In" onClose={onClose}>
      <form className="modal__form" onSubmit={handleSubmit}>
        <input
          className="modal__input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="modal__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
