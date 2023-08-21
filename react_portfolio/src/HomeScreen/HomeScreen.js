import React from 'react';
import styles from './HomeScreen.module.css';
import LandingPage from '../1LandingPage/LandingPage';
import Work from '../3Work/Work';
import Contact from '../4Contact/Contact';
import About from '../2About/About';

export default function HomeScreen() {

  function scrollToSection(link) {
    const anchor = document.querySelector(link);
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function getHeaderComponent() {
    return (
      <div className={styles.header}>
        <nav className={styles.nav_sections}>
          <h3 onClick={() => scrollToSection("#page-about")}>ABOUT</h3>
          <h3 onClick={() => scrollToSection("#page-work")}>WORK</h3>
          <h3 onClick={() => scrollToSection("#page-contact")}>CONTACT</h3>
        </nav>
        <p onClick={() => scrollToSection("#page-landing")}>DESIGN PORTFOLIO</p>
      </div>
    )
  }

  function getFooterComponent() {
    return (
      <div className={styles.footer}>
        <h2>2023</h2>
      </div>
    )
  }


  return (
    <div className={styles.container}
    >
      {getHeaderComponent()}
      {getFooterComponent()}

      <div className={styles.mainContainer2}>
        <div className={styles.item} id='page-landing' data-anchor='#page-landing'>
          <LandingPage/>
        </div>
        <div className={styles.item} id='page-about' data-anchor='#page-about'>
          <About/>
        </div>
        <div className={[styles.item]} id='page-work' data-anchor='#page-work'>
          <Work/>
        </div>
        <div className={styles.item} id='page-contact' data-anchor='#page-contact'>
          <Contact/>
        </div>
      </div>

      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
