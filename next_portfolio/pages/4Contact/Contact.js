import Head from 'next/head';
// import { useNavigate } from "react-router-dom";
// import work from './dummy';
import styles from './Contact.module.css';
// import { useNavigate } from "react-router-dom";
// import work from './dummy';
// import MouseExample from '../MouseExample';

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
