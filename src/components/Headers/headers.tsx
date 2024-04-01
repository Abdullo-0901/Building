import 'animate.css';
import { useTranslation } from 'react-i18next';
import '../../App.css';
import logo from '../../assets/logo.png';
import { Router } from '../router';
import Language from '../language/language';

const Headers = () => {
  const [t] = useTranslation();
  return (
    <header className="animate__animated animate__bounce fixed z-40 w-full backdrop-blur-[100px] sm:py-2 md:py-0">
      <nav className="containers">
        <ul className="  flex items-center sm:justify-between  md:justify-around ">
          {Router.slice(0, 3).map((rou) => {
            return (
              <div
                key={rou.name}
                className="header h-[30px] cursor-pointer flex-col items-center sm:hidden md:flex"
              >
                <a className="text-white " href={`#${rou.href}`}>
                  {t(rou.name)}
                </a>
                <div className="line w-0"></div>
              </div>
            );
          })}
          <img className="h-[80px] sm:w-[55px] md:w-[80px]" src={logo} alt="logo" />
          {Router.slice(3).map((rou) => {
            return (
              <div
                key={rou.name}
                className="header h-[30px] cursor-pointer flex-col items-center sm:hidden md:flex"
              >
                <a key={rou.name} className="text-white" href={`#${rou.href}`}>
                  {t(rou.name)}
                </a>
                <div className="line w-0"></div>
              </div>
            );
          })}

          <Language />
        </ul>
      </nav>
    </header>
  );
};

export default Headers;
