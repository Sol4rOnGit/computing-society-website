//Components
import Header from "../components/Header";

//Styles
import styles from './Landing.module.css';

function Landing(){
    return(
        <>
            <Header />
            <div className={styles.main}>
                <h1>Landing</h1>
            </div>
        </>
    )
}

export default Landing