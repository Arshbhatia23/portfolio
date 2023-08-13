import styles from './Work.module.css';
import Project from './Project';

export default function Work() {
  const work = [{
    projectId: 'dineIn',
    projectName: 'DineInApp',
    projectDescr: "loiutrwvbsxnb"
  }, {
    projectId: 'cafe',
    projectName: 'CafeApp',
    projectDescr: "loiutrwvbsxnb"
  }, {
    projectId: 'knock',
    projectName: 'KnockApp',
    projectDescr: "loiutrwvbsxnb"
  }, {
    projectId: 'portfolio',
    projectName: 'Portfolio',
    projectDescr: "loiutrwvbsxnb"
  }];

  // let navigate = useNavigate(); 
  // const routeChange = () =>{ 
  //   let path = `newPath`; 
  //   navigate(path);
  // }


  function scrollToSection(link) {
    const anchor = document.querySelector(link);
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function NumberList() {
    const listItems = work.map((number) =>
      <h2 key={number.projectId} onClick={() => scrollToSection(`#${number.projectId}`)}>{number.projectName}</h2>
    );
    return (
      <div className={styles.header2}>{listItems}</div>
    );
  }

  return (
    <div data-anchor="page-work">
      <main>
        <div className={styles.workContainer}>
          <h1 className={styles.title}>
            work
          </h1>
          <NumberList />
        </div>
      </main>
      <ul className={styles.listStyle}>
        {work.map((workDetail) =>
          <div id={workDetail.projectId} data-anchor={workDetail.projectId}>
            <Project workDetail={workDetail} />
          </div>)
        }
      </ul>
    </div>
  )
}
