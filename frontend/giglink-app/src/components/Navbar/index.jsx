import styles from "./style.module.css";
import logo from "../../assets/transparent-logo.svg";

export const Navbar = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <ul className={styles.navLinks}>
                    <li className={styles.logo}>
                        <a href="#">
                            <img src={logo} alt="Логотип" />
                        </a>
                    </li>
                    <li className={styles.dropdown}>
                        <a href="#design">Дизайн</a>
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <a href="#">Логотип и брендинг</a>
                            </li>
                            <li>
                                <a href="#">Инфографика</a>
                            </li>
                            <li>
                                <a href="#">Презентации</a>
                            </li>
                            <li>
                                <a href="#">Арт и Иллюстрации</a>
                            </li>
                            <li>
                                <a href="#">Веб и Мобильный Дизайн</a>
                            </li>
                            <li>
                                <a href="#">Маркетплейсы и Социальные Сети</a>
                            </li>
                            <li>
                                <a href="#">Интерьер и Экстерьер</a>
                            </li>
                            <li>
                                <a href="#">Полиграфия</a>
                            </li>
                            <li>
                                <a href="#">Наружная Реклама</a>
                            </li>
                            <li>
                                <a href="#">Промышленный Дизайн</a>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.dropdown}>
                        <a href="#it">IT</a>
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <a href="#">Доработка и Настройка Сайта</a>
                            </li>
                            <li>
                                <a href="#">Создание Сайтов</a>
                            </li>
                            <li>
                                <a href="#">Вёрстка</a>
                            </li>
                            <li>
                                <a href="#">Десктоп программирвоание</a>
                            </li>
                            <li>
                                <a href="#">Скрипты и Боты</a>
                            </li>
                            <li>
                                <a href="#">Мобильные Приложения</a>
                            </li>
                            <li>
                                <a href="#">Игры</a>
                            </li>
                            <li>
                                <a href="#">Сервера и Хостинг</a>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.dropdown}>
                        <a href="#text">Работа с текстом</a>
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <a href="#">Тексты и Наполнение Сайта</a>
                            </li>
                            <li>
                                <a href="#">Переводы</a>
                            </li>
                            <li>
                                <a href="#">Набор Текста</a>
                            </li>
                            <li>
                                <a href="#">Резюме и Вакансии</a>
                            </li>
                            <li>
                                <a href="#">Продающие Тексты</a>
                            </li>
                            <li>
                                <a href="#">Рефераты</a>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.dropdown}>
                        <a href="#smm">Реклама</a>
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <a href="#">Контекстная Реклама</a>
                            </li>
                            <li>
                                <a href="#">Базы данных и Клиентов</a>
                            </li>
                            <li>
                                <a href="#">Рассылки</a>
                            </li>
                            <li>
                                <a href="#">Маркетплейсы и Доски Объявлений</a>
                            </li>
                            <li>
                                <a href="#">Реклама и PR</a>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.dropdown}>
                        <a href="#smm">Социальные сети</a>
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <a href="#">Социальные Сети и SMM</a>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.login}>
                        <a href="#">Вход</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};
