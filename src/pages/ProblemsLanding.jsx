//Modules
import { Link } from "react-router-dom";

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
                <h1 className={styles.title}>Test yourself</h1>
                <p>Please bear with us as we implement the rest of this website. Thank you for your patience.</p>
                <div className={styles.cardHolder}>
                    <ProblemCard title="Beginner" 
                                description="We'd encourage you to use all of the available resources offered by w3schools to learn a laguage, such as python for pre-GCSEs or one that intrigues you such as C# or Java."
                                p2="This is perfect for year 7s to 9s or anyone just starting"
                                isButton="True"
                                isExternalLink="True"
                                href="https://www.w3schools.com/python/default.asp"
                                hrefTxt="Go to w3schools.com"/>
                    <ProblemCard title="CS50"
                                description='The CS50 "Introduction to Computer Science" course by harvard is reccomended to get you to understanding a large amount of what you need in an 11 week course. Try it out at home. If this is blocked on school PCs please tell someone! (We will try our best to get it fixed asap). CS50P is better suited towards intermediate people or people who just want to learn python.'
                                p2="This is perfect for a certification on your LinkedIn, or to deepen your understanding of programming"
                                isButton="True"
                                isExternalLink="True"
                                href="https://cs50.harvard.edu/x/"
                                hrefTxt="Harvard CS50 course"
                                />
                    <ProblemCard title="Problem Solving"
                                description="Although these are oriented towards Interview questions, and best suited for intermediate to advanced programmers, it's completely worth a try and a great way to see practical applications of the field. If you're struggling try to learn Data Structures and Algorithms. Use leetcode below to test out your knowledge!"
                                p2="Perfect for interview practice, and testing your DSA/Language theory out"
                                isButton="True"
                                isExternalLink="True"
                                href="https://leetcode.com/"
                                hrefTxt="LeetCode"
                                />
                </div>

                <div className={styles.letUsKnow}>
                    <p>Any reccomendations? Let us know</p>
                    <Link to="/about">Go to about</Link>
                </div>
            </div>
        </>
    )
}


export default ProblemsLanding