//Components
import Header from "../components/Header";
import { Link } from "react-router-dom";

//Styles
import styles from './Broken.module.css';

function About(){
    return(
        <>
            <Header />
            <div className={styles.centre}>
                <h1>This is broken Page. Return to home page by clicking <Link to="/">here</Link></h1>
                <p>Report this to Computing Department if you can thank you.</p>
            </div>
        </>
    )
}

export default About