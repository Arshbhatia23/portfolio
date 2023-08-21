import React, { useState } from 'react';
import styles from './Work.module.css';
import arrow from '../Images/caret-right-solid.svg'
import dineIn from '../Images/dineIn.jpeg'


export default function Project({workDetail}){

     const [scrolled,setScrolled] = useState(false);

    return(
        <div className={styles.mainContainer}>
            { !scrolled ? 
            <>
            <div className={styles.workContainer2}> 
            <h1>{workDetail.projectName}</h1>
            <p className={styles.description}>{workDetail.projectDesc}</p>
            </div>
            <div>
            <img src={arrow} className={styles.logo} onClick={()=> setScrolled(!scrolled)}/>
            </div>
            </>
            : <div className={styles.mainContainer}>
                 <div className={styles.workContainer2}> 
                 <image src={dineIn} className={styles.img1}></image>
                 </div>
            <div>
            <img src={arrow} className={styles.logo} onClick={()=> setScrolled(!scrolled)}/>
            </div>
                </div>}
        </div>
    )
}