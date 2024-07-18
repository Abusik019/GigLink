import styles from './style.module.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <form className={styles.modalForm}>
          <h1>РЕГИСТРАЦИЯ</h1>
          <input type='text' placeholder='ФИО*'/>
          <input type='email' placeholder='Почта*'/>
          <input type='password' placeholder='Пароль*'/>
          <input type='password' placeholder='Повторите пароль*'/>
          <button className={styles.login}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
          <button className={styles.isHaveAccount}>Уже есть аккаунт?</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
