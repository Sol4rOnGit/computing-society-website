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
                <h1>This page is currently being built or being maintained. Return to home page by clicking <Link to="/">here</Link></h1>
                <p>Report this to Computing Department if you belive this is not meant to occur. Thank you!</p>
            </div>
        </>
    )
}

export default About