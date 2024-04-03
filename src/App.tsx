import Headers from './components/Headers/headers';
import Company from './components/company';
import Contact from './components/contact';
import Footer from './components/footer';
import Home from './components/home/home';
import { Information } from './components/information';
import News from './components/news';
import Project from './components/project';
import Services from './components/services';

const App = () => {
  return (
    <div className="overflow-hidden">
      <Headers />
      <Home />
      <section id="services" className="bg-[#3d5a6a]">
        <Services />
      </section>
      <Company />
      <Information />
      <Project />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
