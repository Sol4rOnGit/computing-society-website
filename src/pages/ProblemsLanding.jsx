//Components
import Header from "../components/Header";

//Styles
import styles from './ProblemsLanding.module.css';

function ProblemsLanding(){
    return(
        <>
            <Header />
            <div className={styles.main}>
                <h1>Problems Landing</h1>
                <p>Please bear with us as we implement the rest of this website. Thank you for your patience.</p>
                <p>Link to w3schools for beginner programmers (python recommended as a start): <a href="https://https://www.w3schools.com/python/default.asp.com/" target="_blank" rel="noopener">w3schools</a></p>
                <p>Link to leetcode for advanced programmers: <a href="https://leetcode.com/" target="_blank" rel="noopener">leetcode</a></p>
            </div>
        </>
    )
}


export default ProblemsLanding