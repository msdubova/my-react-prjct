import React from "react";
// import "./Footer.css";  // Include styles for the footer

function Footer() {
  return (
    <footer className="page__footer footer">
      <div className="footer__container container">
        <ul className="footer__socials socials">
          <li className="socials__item">
            <a className="page__link" target="_blank" href="https://github.com/msdubova?tab=repositories" rel="noreferrer">
              <svg width="45" height="45" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <use href="img/sprite_auto.svg#github"></use>
              </svg>
              <span>github</span>
            </a>
          </li>
          <li className="socials__item socials__item--mobileonly">
            <a href="mailto:ms.olga.dubovaya@gmail.com">
              <svg width="45" height="45" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <use href="img/sprite_auto.svg#letter"></use>
              </svg>
            </a>
          </li>
          <li className="page__link socials__item">
            <a className="page__link" target="_blank"
               href="https://www.linkedin.com/in/%D0%BE%D0%BB%D1%8C%D0%B3%D0%B0-%D0%B4%D1%83%D0%B1%D0%BE%D0%B2%D0%B0%D1%8F-a44262261/" rel="noreferrer">
              <svg width="45" height="45" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <use href="img/sprite_auto.svg#linkdn"></use>
              </svg>
              <span>linkdn</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
