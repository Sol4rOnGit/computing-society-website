//Components
import Header from "../components/Header";

//Styles
import styles from './Landing.module.css';

function Landing(){
    return(
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.wrapper}>
                    <h1>Welcome to the <span className={styles.UCGS}>UCGS</span> Computing Department</h1>
                    <p>Navigate to where you need to using the navbar</p>
                </div>
            </div>
        </>
    )
}

export default Landing