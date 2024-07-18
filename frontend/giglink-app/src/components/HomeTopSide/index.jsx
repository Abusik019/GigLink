import styles from './style.module.css';
import { useState, useEffect } from 'react';
import { Navbar } from '../Navbar';
import cyanItem from '../../assets/cyan_pink-View 3.png';
import { Swiper } from '../Slider';
import fingerImg from '../../assets/finger.svg';
import earthImg from '../../assets/earth.svg';
import scheduleImg from '../../assets/schedule.svg';
import Modal from '../Modal';

export const HomeTopSide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('modal-open', isModalOpen);
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.homeTopSide}>
      <Navbar />
      <div className={styles.textContentBlock}>
        <h1>Откройте мир возможностей с<br /><span>GigLink</span><br /><br />где каждый проект - это история успеха</h1>
        <p>Данная платформа предлагает возможность<br />для потребителей размещать заказы различных видов<br />и найти специалистов для выполнения работ</p>
        <button onClick={openModal}>Регистрация</button>
        <img src={cyanItem} className={styles.cyanItem} />
      </div>
      <Swiper />
      <div className={styles.advantages}>
        <h1>Мы поможем работать более <span>эффективно</span></h1>
        <p>Мы предлагаем вам полный сет<br />инструментов и функций для лучшего<br />взаимодействия с платформой</p>
        <ul className={styles.advantagesList}>
          <li>
            <img src={fingerImg} />
            <h1>Используйте понятный интерфейс</h1>
            <p>мы разработали интуитивный и простой интерфейс, с которым работа будет приносить удовольствие</p>
          </li>
          <li>
            <img src={scheduleImg} />
            <h1>Получайте ежемесячные отчёты</h1>
            <p>Регулярные отчёты состоят из всех необходимых вам деталей и информации по проекту</p>
          </li>
          <li>
            <img src={earthImg} />
            <h1>В любой точке<br />планеты</h1>
            <p>Сохраняйте связь с работой находясь в любом месте, в любое время, всё что вам нужно - это доступ к интернету</p>
          </li>
        </ul>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};
