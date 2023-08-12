import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div data-anchor="page-contact">
      <main>
        <div className={styles.workContainer}>
          <h1 className={styles.title}>
            contact
          </h1>
         <div className={styles.imageContainer}>
            <img src="./gmail.svg" alt='gmail' className={styles.logo}/>
            <img src="./github.svg" alt='github' className={styles.logo}/>
            <img src="./linkedin.svg" alt='linkedin' className={styles.logo}/>
         </div>
        </div>
      </main>
    </div>
  )
}
