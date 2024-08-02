import styles from "./style.module.css";
import logo from "../../assets/transparent-logo.svg";
import { useState } from "react";
import Login from "../../login";


export const Navbar = ({ setOpenLogin}) => {

   

    function handleOpen(){
        setOpenLogin(true)
    }
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
                        <a href="#smm">Реклама и SMM</a>
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <a href="#">Контекстная Реклама</a>
                            </li>
                            <li>
                                <a href="#">Социальные Сети и SMM</a>
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
                        <a href="#smm">SEO</a>
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <a href="#">SEO</a>
                            </li>
                            <li>
                                <a href="#">Трафик</a>
                            </li>
                            <li>
                                <a href="#">Статистика и анализ</a>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.dropdown}>
                        <a href="#smm">Аудио и видео</a>
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <a href="#">Аудиозапись и озвучка</a>
                            </li>
                            <li>
                                <a href="#">Музыка и песни</a>
                            </li>
                            <li>
                                <a href="#">Редактирование аудио</a>
                            </li>
                            <li>
                                <a href="#">Интро</a>
                            </li>
                            <li>
                                <a href="#">Анимация логотипа</a>
                            </li>
                            <li>
                                <a href="#">Видеоролики</a>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.dropdown}>
                        <a href="#smm">Бизнес</a>
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <a href="#">Персональный помощник</a>
                            </li>
                            <li>
                                <a href="#">Бухгалтерия и налоги</a>
                            </li>
                            <li>
                                <a href="#">Обзвоны и продажи</a>
                            </li>
                            <li>
                                <a href="#">Юридическая помощь</a>
                            </li>
                            <li>
                                <a href="#">HR-поддержка</a>
                            </li>
                            <li>
                                <a href="#">Обучение и консалтинг</a>
                            </li>
                            <li>
                                <a href="#">Стройка и ремонт</a>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.dropdown}>
                        <a href="#smm">Аккаунт</a>
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <a href="#">Личные данные</a>
                            </li>
                            <li>
                                <a href="#">Настройки</a>
                            </li>
                            <li>
                                <a href="#">Помощь</a>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.login}>
                        <a onClick={handleOpen}>Вход</a>
                    </li>
                </ul>
            </nav>
            
           
        </>
    );
};
