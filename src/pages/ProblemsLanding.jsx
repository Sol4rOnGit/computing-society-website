//Components
import Header from "../components/Header";

import ProblemCard from "../components/cards/ProblemCard";

//Styles
import styles from './ProblemsLanding.module.css';

function ProblemsLanding(){
    return(
        <>
            <Header />
            <div className={styles.main}>
                <h1>Problems Landing Page</h1>
                <p>Please bear with us as we implement the rest of this website. Thank you for your patience.</p>
                <p>Link to w3schools for beginner programmers (python recommended as a start): <a href="https://www.w3schools.com/python/default.asp" target="_blank" rel="noopener">w3schools</a></p>
                <p>Link to leetcode for advanced programmers: <a href="https://leetcode.com/" target="_blank" rel="noopener">leetcode</a></p>
                <p>The below is all WIP</p>
                <div className={styles.cardHolder}>
                    <ProblemCard title="Beginner" 
                                description="We'd encourage you to use all of the available resources offered by w3schools to learn a laguage, such as python for pre-GCSEs or one that intrigues you such as C# or Java" 
                                isExternalLink="True"
                                href="https://www.w3schools.com/python/default.asp"
                                hrefTxt="Go to w3schools.com"/>
                    <ProblemCard title="Intermediate"
                                description="We will be eventually adding GCSE exam questions and A level exam questions for you all, and cool problems will be posted every now and then for you to try. For now, try learn Data Structures and Algorithms"
                                href=""
                                />
                </div>
            </div>
        </>
    )
}


export default ProblemsLanding