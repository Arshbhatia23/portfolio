import Head from 'next/head';
// import { useNavigate } from "react-router-dom";
// import work from './dummy';
import styles from './Work.module.css';
import { useNavigate } from "react-router-dom";
import work from './dummy';
// import MouseExample from '../MouseExample';

export default function Work() {
    const work = [{
        projectName : 'DineInApp',
        projectDescr :"loiutrwvbsxnb"
    },{
        projectName : 'CafeApp',
        projectDescr :"loiutrwvbsxnb"
    },{
        projectName : 'KnockApp',
        projectDescr :"loiutrwvbsxnb"
    },{
        projectName : 'KnockApp',
        projectDescr :"loiutrwvbsxnb"
    }];

    // let navigate = useNavigate(); 
    // const routeChange = () =>{ 
    //   let path = `newPath`; 
    //   navigate(path);
    // }

    function NumberList() {
        console.log('work');
        console.log(work);
        const listItems = work.map((number) =>
          <h2 onClick={()=>{console.log("")}}>{number.projectName}</h2>
        );
        return (
          <div className={styles.header2}>{listItems}</div>
        );
      }

  return (
    <div >
      <main>
        <div className={styles.workContainer}>
        <h1 className={styles.title}>
           work
        </h1>
        <NumberList/>
        </div>
      </main>
    </div>
  )
}
