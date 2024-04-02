import Headers from '../components/Headers/headers';
import Company from '../components/company';
import Contact from '../components/contact';
import { Information } from '../components/information';
import News from '../components/news';
import Partners from '../components/partners';
import Project from '../components/project';
import Services from '../components/services';

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
