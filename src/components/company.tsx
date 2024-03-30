import { useTranslation } from 'react-i18next';
import '../App.css';

const Company = () => {
  const [t] = useTranslation();
  return (
    <div
      id="progress"
      className="size-full relative -z-10 -mt-3 bg-[url('/rate-image.jpg')] bg-cover bg-no-repeat object-cover"
    >
      <div>
        <div className="containers px-20 pb-24 pt-10 text-white max-sm:px-10">
          <h2
            data-aos="fade-up"
            className="aos-init aos-animate pb-10 text-[32px] text-white max-sm:text-center max-sm:text-[24px]"
          >
            {t('companytitle')}
          </h2>
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="aos-init flex flex-wrap items-center gap-6 max-sm:justify-center"
          >
            <div className="flex flex-wrap items-center gap-6  max-sm:flex-col max-sm:justify-center">
              <ul className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center">
                <li className="text-[45px] font-semibold max-sm:text-[32px] ">
                  <span>120</span>+
                </li>
                <li className="text-[20px] max-sm:text-[16px]">{t('companytext1')}</li>
              </ul>
              <ul className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center">
                <li className="text-[45px] font-semibold max-sm:text-[32px]">
                  <span>43</span>+
                </li>
                <li className="text-[20px] max-sm:text-[16px]">{t('companytext2')}</li>
              </ul>
            </div>
            <div className="flex flex-wrap items-center gap-6  max-sm:flex-col max-sm:justify-center">
              <ul className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center">
                <li className="text-[45px] font-semibold max-sm:text-[32px]">
                  <span>250</span>+
                </li>
                <li className="text-[20px] max-sm:text-[16px]">{t('companytext3')}</li>
              </ul>
              <ul className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center">
                <li className="text-[45px] font-semibold max-sm:text-[32px]">
                  <span>2</span>+
                </li>
                <li className="text-[20px] max-sm:text-[16px]">{t('companytext4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
