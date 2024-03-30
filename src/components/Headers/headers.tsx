import 'animate.css';
import { useTranslation } from 'react-i18next';
import '../../App.css';
import logo from '../../assets/logo.png';
import { Router } from '../router';

const Headers = () => {
  const [t] = useTranslation();
  return (
    <header className="animate__animated animate__bounce fixed z-40 w-full backdrop-blur-[100px]">
      <nav className="containers">
        <ul className=" flex items-center justify-around">
          {Router.slice(0, 3).map((rou) => {
            return (
              <div key={rou.name} className="header flex h-[30px] cursor-pointer flex-col items-center">
                <a className="text-white " href={`#${rou.href}`}>
                  {t(rou.name)}
                </a>
                <div className="line w-0"></div>
              </div>
            );
          })}
          <img className="w-[100px]" src={logo} alt="qwdqwed" />
          {Router.slice(3).map((rou) => {
            return (
              <div key={rou.name} className="header flex h-[30px] cursor-pointer flex-col items-center">
                <a key={rou.name} className="text-white" href={`#${rou.href}`}>
                  {t(rou.name)}
                </a>
                <div className="line w-0"></div>
              </div>
            );
          })}
          <select
            id="small"
            className=" inline-block rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900  outline-none"
          >
            <option selected>Uz</option>
            <option value="US">Ru</option>
            <option value="CA">En</option>
          </select>
        </ul>
      </nav>
    </header>
  );
};

export default Headers;
