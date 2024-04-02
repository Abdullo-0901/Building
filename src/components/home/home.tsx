import { useTranslation } from 'react-i18next';
import '../../App.css';
import Company from '../company';
import { Information } from '../information';
import Partners from '../partners';
import Services from '../services';
import Project from '../project';
import News from '../news';
import Contact from '../contact';
import Footer from '../footer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [t] = useTranslation();
  return (
    <div>
      <section id="" className='h-screen w-full bg-[url("/city.jpg")] bg-cover bg-no-repeat'>
        <div className="flex h-screen items-center bg-black bg-opacity-40 object-cover">
          <div className="containers p-[0_2px]">
            <h2 className="animate__animated animate__bounceInLeft block pt-[100px] text-[72px] font-medium text-white max-md:text-[45px] max-sm:text-center sm:text-center sm2:text-start">
              ATAEV
            </h2>
            <div className="flex gap-5 sm:flex-col sm:items-center sm2:flex-row sm2:items-start">
              <h2 className="animate__animated animate__bounceInLeft block  text-[72px] font-medium text-white max-md:text-[45px] max-sm:text-center">
                BAHODIR
              </h2>
              <h2 className="animate__animated animate__bounceInLeft block   text-[72px] font-medium text-white max-md:text-[45px] max-sm:text-center">
                {t('hometitle')}
              </h2>
            </div>
            <p className="animate__animated animate__bounceInLeft block pb-8 text-[18px] text-white max-sm:text-center sm:text-center sm2:text-start">
              {t('homedesc')}
            </p>
            <div className="animate__animated animate__bounceInUp animate__delay-0.9s   gap-4 sm:justify-center md:justify-start">
              <a href="#services">
                <button className="ring-offset-background focus-visible:ring-ring text-primary-foreground scale inline-flex h-10 cursor-pointer items-center justify-center whitespace-nowrap rounded-md rounded-l-full rounded-r-full border-2 bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:border-gray-500 hover:bg-white hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Наши проекты
                </button>
              </a>{' '}
              <a href="#connect">
                <button className="ring-offset-background focus-visible:ring-ring text-primary-foreground scale inline-flex h-10 cursor-pointer items-center justify-center whitespace-nowrap rounded-md rounded-l-full rounded-r-full border-2 bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:border-gray-500 hover:bg-white hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Связь
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
