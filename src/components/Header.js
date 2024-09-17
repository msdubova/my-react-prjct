import React from 'react';
// import './Header.css';  // Ensure you include styles for the header

function Header() {
  return (
    <header className="page__header header menu">
      <div className="header__container container">
        <button className="menu__button"><span></span></button>
        <ul className="header__nav header__nav--title menu__block page__menu">
          <li>
            <a className="page__link" href="/">
              <svg width="45" height="45" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <use href="img/sprite_auto.svg#home"></use>
              </svg>
              <span>home</span>
            </a>
          </li>
          <li>
            <a className="page__link" href="/projects">
              <svg width="45" height="45" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <use href="img/sprite_auto.svg#iphone"></use>
              </svg>
              <span>projects</span>
            </a>
          </li>
          <li>
            <a className="page__link" href="/about">
              <svg width="45" height="45" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <use href="img/sprite_auto.svg#climb"></use>
              </svg>
              <span>about</span>
            </a>
          </li>
        </ul>
        <div className="switch">
          <label htmlFor="toggle">
            <input id="toggle" className="toggle-switch" type="checkbox" />
            <div className="sun-moon">
              <div className="dots"></div>
            </div>
            <div className="background">
              <div className="stars1"></div>
              <div className="stars2"></div>
            </div>
            <div className="fill"></div>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;
