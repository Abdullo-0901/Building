import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import '../App.css';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { rem } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const data = [
  {
    path: 'partners1.jpg',
    id: 1,
  },
  {
    path: 'partners2.jpg',
    id: 2,
  },
  {
    path: 'partners3.jpg',
    id: 3,
  },
  {
    path: 'partners4.jpg',
    id: 4,
  },
  {
    path: 'partners5.jpg',
    id: 5,
  },
  {
    path: 'partners6.jpg',
    id: 6,
  },
  {
    path: 'partners7.jpg',
    id: 7,
  },
  {
    path: 'partners8.jpg',
    id: 8,
  },
];

const Partners = () => {
  const [t] = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-[#3d5a6a] py-10" id="partners">
      <div className="containers max-h-screen ">
        <h2
          data-aos="zoom-in"
          className="aos-init aos-animate mb-4 text-center text-3xl text-white max-sm:text-xl"
        >
          {t('partnerstitle')}
        </h2>
        <Carousel
          data-aos="zoom-out-left"
          withIndicators
          style={{ maxHeight: '70vh' }}
          slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
          slideGap={{ base: 0, sm: 'md' }}
          loop
          align="start"
          nextControlIcon={
            <IconArrowRight
              style={{
                width: rem(25),
                color: 'white',
                height: rem(25),
              }}
            />
          }
          previousControlIcon={
            <IconArrowLeft
              style={{
                width: rem(25),
                color: 'white',
                height: rem(25),
              }}
            />
          }
        >
          {data.map((car) => {
            return (
              <Carousel.Slide key={car.id}>
                <div className="bg-card  rounded-lg border shadow-sm">
                  <img src={`/partners/${car.path}`} className="max-h-[70vh] w-full rounded-lg" alt="img" />
                </div>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;
