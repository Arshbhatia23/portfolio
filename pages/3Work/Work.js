import Head from 'next/head';
import styles from '../HomeScreen/HomeScreen.module.css';
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
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
        <h1 className={styles.title}>
           work
        </h1>

        <NumberList/>

        
      </main>

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
