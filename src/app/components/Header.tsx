"use client"
import { useRouter } from 'next/navigation';
// import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const router = useRouter();
//   const { t } = useTranslation();

  const changeLanguage = (locale: string) => {
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">Medium</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {/* <a className="text-gray-600 hover:text-gray-900">{t('header.about')}</a>
          <a className="text-gray-600 hover:text-gray-900">{t('header.contact')}</a>
          <a className="text-gray-600 hover:text-gray-900">{t('header.write')}</a> */}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* <a className="text-gray-600 hover:text-gray-900">{t('header.signin')}</a> */}
          {/* < className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition">
            {/* {t('header.getstarted')} */}
          

          {/* Language Dropdown */}
          {/* <div className="relative">
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md">
              EN
            </button>
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-32">
              {['en', 'fr', 'es'].map((locale) => (
                <button
                  key={locale}
                  onClick={() => changeLanguage(locale)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  {locale.toUpperCase()}
                </button>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
