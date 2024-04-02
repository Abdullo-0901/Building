import { Outlet } from 'react-router-dom';
import Headers from '../components/Headers/headers';
import Services from '../components/services';
import Company from '../components/company';
import Partners from '../components/partners';
import { Information } from '../components/information';
import Project from '../components/project';
import News from '../components/news';
import Contact from '../components/contact';

const Layout = () => {
  return (
    <div className="overflow-hidden">
      <Headers />

      <section id="services" className="bg-[#3d5a6a]">
        <Services />
      </section>
      <Company />
      <Partners />
      <Information />
      <Project />
      <News />
      <Contact />
      <footer />
    </div>
  );
};

export default Layout;
