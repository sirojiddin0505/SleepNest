import React, { useState, useRef, useEffect } from 'react';
import './nav.css';
import logo from '../nav/images/logo.svg';

const languageOptions = [
  { value: 'uz', label: "O'zbekcha", short: 'UZ' },
  { value: 'ru', label: 'Русский', short: 'RU' },
  { value: 'en', label: 'English', short: 'EN' },
];

const Nav = () => {
  const [selected, setSelected] = useState('uz');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLang = languageOptions.find(lang => lang.value === selected);

  return (
    <nav>
      <div className="container nav__container">
        <div className="nav__left">
          <img src={logo} alt="logo" className="nav__logo" />
        </div>
        <div className="nav__right">
          <a href="#" className="nav__link">Bosh sahifa</a>
          <a href="#" className="nav__link">To'plam</a>
          <a href="#" className="nav__link">Biz haqimizda</a>
          <a href="#" className="nav__link">Kontaktlar</a>
          <div className="custom-language-select" ref={dropdownRef}>
            <div className="selected-lang" onClick={() => setIsOpen(!isOpen)}>
              {selectedLang.short}
            </div>
            {isOpen && (
              <div className="lang-options">
                {languageOptions.map((lang) => (
                  <div
                    key={lang.value}
                    className={`lang-option ${lang.value === selected ? 'selected' : ''}`}
                    onClick={() => handleOptionClick(lang.value)}
                  >
                    {lang.label}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="hum__menu" id="hum__menu">☰</div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
