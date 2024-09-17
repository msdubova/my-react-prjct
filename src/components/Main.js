import React from "react";
// import "./Main.css";  // Include styles for the main section

function Main() {
  return (
    <main className="page__main">
      <section className="section section--title">
        <div className="container section__container">
          <h1 className="typing">
            Hello!<br />
            <span className="typing--desktop">I am Olga Dubova</span>
            <span className="typing--mobile">I'm Olga</span>
          </h1>
          <p>
            I'm a <b>frontend developer</b> who combines technical expertise with creativity to deliver exceptional web
            experiences.
          </p>
          <nav className="nav">
            <ul>
              <li>
                <a className="page__button" href="/about">
                  <span>my </span>skills
                </a>
              </li>
              <li>
                <a className="page__button" href="/projects">
                  <span>my </span>projects
                </a>
              </li>
              <li>
                <a className="page__button" href="mailto:ms.olga.dubovaya@gmail.com">
                  contact<span> me </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </main>
  );
}

export default Main;
