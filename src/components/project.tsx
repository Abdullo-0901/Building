import { useTranslation } from 'react-i18next';
import '../App.css';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
    img: '/loiha/loiha1.jpg',
    title: 'loihatitle1',
    about: 'loihaabout1',
    id: 1,
  },
  {
    img: '/loiha/loiha2.jpg',
    title: 'loihatitle2',
    about: 'loihaabout2',
    id: 2,
  },
  {
    img: '/loiha/loiha3.jpg',
    title: 'loihatitle3',
    about: 'loihaabout3',
    id: 3,
  },
  {
    img: '/loiha/loiha3.jpg',
    title: 'loihatitle4',
    about: 'loihaabout4',
    id: 4,
  },
  {
    img: '/loiha/loiha5.jpg',
    title: 'loihatitle5',
    about: 'loihaabout5',
    id: 5,
  },
  {
    img: '/loiha/loiha6.jpg',
    title: 'loihatitle6',
    about: 'loihaabout6',
    id: 6,
  },
];

const Project = () => {
  const [t] = useTranslation();
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="containers my-10" id="projects">
      <p data-aos="zoom-in-up" className="my-4 text-3xl">
        {t('loihatitle')}
      </p>
      <main className="grid gap-10 md:grid-cols-2 ">
        {data.map((card) => {
          return (
            <article data-aos="zoom-in-down" key={card.id} className="relative ">
              <div
                style={{
                  backgroundImage: `url(${card.img})`,
                }}
                className={`project_text flex h-[380px] cursor-pointer overflow-hidden rounded-xl  bg-cover bg-no-repeat  object-cover  transition delay-500 ease-in-out `}
              >
                <div className="flex  w-full items-center bg-black bg-opacity-40 object-cover p-4">
                  <div className=" project_card relative flex  w-full   flex-col gap-y-2">
                    <h2 className="project-card-tile text-2xl  ">{t(card.title)}</h2>
                    <h2 className="projectm_cards_info text-white">{t(card.about)}</h2>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </main>
    </section>
  );
};

export default Project;
