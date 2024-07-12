import styles from './style.module.css'
import logo from '../../assets/transparent-logo.svg'

export const Navbar = () => {
  return (
    <ul className={styles.navbar}>
        <li><img src={logo}/></li>
        <li>Дизайн</li>
        <li>IT</li>
        <li>Работа с текстом</li>
        <li>Социальные сети</li>
        <li>Реклама</li>
        <li><button>Вход</button></li>
    </ul>
  )
}
