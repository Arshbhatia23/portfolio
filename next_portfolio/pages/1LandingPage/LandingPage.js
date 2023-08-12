import styles from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <div>
      <main>
        <div className={styles.landing_page_container}> 
        <div className={styles.titleName}>
        <h1>Developer <br /> Name</h1>
      </div>
      <div className={styles.titleDesc}>
        <h4>Front end software developement in India, <br /> 
        with a particular passion for design,<br /> 
        creativity and communication.</h4>
      </div>
      {/* <h1>LANDING PAGE</h1> */}
         </div>
      </main>
    </div>
  )
}
