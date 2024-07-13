import './style.css';
import { useState } from 'react';
import swiperArrow from '../../assets/swiper-arrow.svg';

const slides = [
  {
    title: 'ВЫБОР КАТАЛОГА',
    content: 'Aliquyam sed dolor sadipscing sed duo diam dolore, et ipsum magna accusam dolor justo labore et. Ipsum sadipscing et stet est eirmod. Lorem sed amet rebum at diam, takimata invidunt.'
  },
  {
    title: 'УПРАВЛЕНИЕ ВРЕМЕНЕМ',
    content: 'Aliquyam sed dolor sadipscing sed duo diam dolore, et ipsum magna accusam dolor justo labore et. Ipsum sadipscing et stet est eirmod. Lorem sed amet rebum at diam, takimata invidunt.'
  },
  {
    title: 'КОММУНИКАЦИЯ',
    content: 'Aliquyam sed dolor sadipscing sed duo diam dolore, et ipsum magna accusam dolor justo labore et. Ipsum sadipscing et stet est eirmod. Lorem sed amet rebum at diam, takimata invidunt.'
  }
];

export const Swiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className='swiperWrapper'>
      <div className='swiper'>
        {slides.map((slide, index) => {
          let classNames = 'swipe';
          if (index === currentSlide) {
            classNames += ' active';
          } else if (index === (currentSlide + 1) % slides.length) {
            classNames += ' next';
          } else if (index === (currentSlide + 1) % slides.length) {
            classNames += ' prev';
          }
          return (
            <div key={index} className={classNames}>
              <button onClick={handleNext}><img src={swiperArrow} alt="Next" /></button>
              <h1>{slide.title}</h1>
              <p>{slide.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
