import { useState } from "react";
import styles from "./style.module.css";
import { useDispatch } from "react-redux";
import { authSignIn } from "../features/applicationSlice";

const Login = ({ setOpenLogin, isOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  function handleClose() {
    setOpenLogin(false);
  }
  function handleCloseLog(e) {
    if (e.target === e.currentTarget) {
      setOpenLogin(false);
    }
  }

  function fetchSignIn() {
    dispatch(authSignIn({ email, password }));
  }

  function fetchSignUp() {
    setOpenLogin(false)
    isOpen()
  }

  return (
    <div onClick={handleCloseLog} className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={handleClose} className={styles.closeButton}>
          ×
        </button>
        <form className={styles.modalForm}>
          <h1>Вход</h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Почта*"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Пароль*"
          />

          <button onClick={fetchSignIn} className={styles.login}>
            войти
          </button>
        <a onClick={fetchSignUp} href="#">нет аккаунта? ЗАРЕГИСТРИРОВАТЬСЯ</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
