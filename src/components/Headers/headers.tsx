import { Button, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import 'animate.css';
import { useTranslation } from 'react-i18next';
import '../../App.css';
import logo from '../../assets/logo.png';
import Language from '../language/language';
import { Router } from '../router';
import { CiMenuFries } from 'react-icons/ci';
import { useEffect, useState } from 'react';

const Headers = () => {
  const [t] = useTranslation();
  const [opened, { open, close }] = useDisclosure(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`animate__animated animate__bounce fixed z-40 w-full ${
        !scrolled ? ' backdrop-blur-[100px]' : ''
      } sm:py-2 md:py-0`}
    >
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
          <a href="#">
            <img className="sm:h-[55px] sm:w-[55px] md:h-[80px] md:w-[80px]" src={logo} alt="logo" />
          </a>
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
          <div className="flex items-center gap-2">
            <Language />
            <Drawer
              opened={opened}
              onClose={close}
              title="Menu"
              position="right"
              overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
              size={'xs'}
            >
              <ul className="  flex flex-col items-center ">
                {Router.map((rou) => {
                  return (
                    <div
                      key={rou.name}
                      className="header h-[30px] cursor-pointer flex-col items-center md:flex"
                    >
                      <a key={rou.name} className="text-black" href={`#${rou.href}`} onClick={() => close()}>
                        {t(rou.name)}
                      </a>
                      <div className="line w-0"></div>
                    </div>
                  );
                })}
              </ul>
            </Drawer>
            <Button variant="default" className="sm:inline-block md:hidden" onClick={open}>
              <CiMenuFries />
            </Button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Headers;
