import { Navbar } from '../Navbar'
import styles from './style.module.css'
import cyanItem from '../../assets/cyan_pink-View 3.png'

export const HomeTopSide = () => {
  return (
    <div className={styles.homeTopSide}>
        <Navbar />
        <div className={styles.textContentBlock}>
          <h1>Откройте мир возможностей  с<br /><span>GigLink</span><br /><br />где каждый проект - это история успеха</h1>
          <p>Данная платформа предлагает возможность<br />для потребителей размещать заказы различных видов<br />и найти специалистов для выполнения работ</p>
          <button>Регистрация</button>
          <img src={cyanItem} className={styles.cyanItem}/>
        </div>
    </div>
  )
}
