import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="lang-switcher" style={{ display: 'flex', gap: '8px' }}>
      <button onClick={() => changeLanguage('az')}>AZ</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
    </div>
  );
};

export default LanguageSwitcher;
