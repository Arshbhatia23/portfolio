import Head from 'next/head';
import styles from './HomeScreen.module.css';
// import MouseExample from '../MouseExample';
import LandingPage from '../1LandingPage/LandingPage';
import Work from '../3Work/Work';

export default function HomeScreen() {

  function getHeaderComponent() {
    return (
      <div className={styles.header}>
        <nav className={styles.nav_sections}>
          <h3>About</h3>
          <h3>Work</h3>
          <h3>Contact</h3>
        </nav>
        <h2>DESIGN PORTFOLIO</h2>
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
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/portfolio_logo.ico" />
      </Head>

      
      
        {/* SET Header as ABSOLUTE & Add Footer ALSO */}
        {getHeaderComponent()}
        {getFooterComponent()}
      
      

      <div className={styles.mainContainer2}>
        {LandingPage()}
        {Work()}
        </div>



      <style jsx>{`
        main {
          padding: 5rem 0;
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
