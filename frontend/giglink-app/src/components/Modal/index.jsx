import { useState } from 'react';
import styles from './style.module.css';
import { useDispatch } from "react-redux";
import { authSignUp } from '../../features/applicationSlice';


const Modal = ({setOpenLogin, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [patronymic, setPatronymic] = useState('')
  const [country, setCountry] = useState('')

 function fetchSignUp() {
  dispatch(authSignUp({email, password, firstName, lastName, patronymic, country}))
 }

function handleOpenLogin(){
  onClose()
 setOpenLogin(true)
}

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <form className={styles.modalForm}>
          <h1>РЕГИСТРАЦИЯ</h1>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Почта*'/>
          <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Пароль*'/>
          <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" placeholder='Имя' />
          <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" placeholder='Фамилия' />
          <input onChange={(e) => setPatronymic(e.target.value)} value={patronymic} type="text" placeholder='Отчечтво' />
          <input onChange={(e) => setCountry(e.target.value)} value={country} type="text" placeholder='Город' />

          


          <button onClick={fetchSignUp} className={styles.login}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
          <button onClick={handleOpenLogin} className={styles.isHaveAccount}>Уже есть аккаунт?</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
