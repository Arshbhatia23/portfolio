import Head from 'next/head';
// import { useNavigate } from "react-router-dom";
// import work from './dummy';
import styles from './About.module.css';
// import { useNavigate } from "react-router-dom";
// import work from './dummy';
// import MouseExample from '../MouseExample';

export default function About() {

    return (
        <div data-anchor="page-about">
            <main>
                <div className={styles.aboutContainer}>
                    <h1 className={styles.title}>
                        About
                    </h1>
                    <div className={styles.about_desc}>
                        <h1 className={styles.title}>
                            lorem
                        </h1>
                        <h1 className={styles.title}>
                            About
                        </h1>
                    </div>
                </div>
            </main>
        </div>
    )
}
