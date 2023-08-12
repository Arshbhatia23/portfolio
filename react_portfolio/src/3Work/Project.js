import styles from './Work.module.css';

export default function Project({workDetail}){
    return(
        <div className={styles.workContainer}>
            <main>
            <h1>{workDetail.projectName}</h1>
            </main>
        </div>
    )
}