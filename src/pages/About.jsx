//Components
import Header from "../components/Header"

import styles from './About.module.css';

function About(){
    return(
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.section}>
                    <h1>About us</h1>
                    <p>The UCGS Computing Society is a student-led community run by experiened sixth form students, open for everyone interested in computer science, technology and problem solving and programming.</p>
                    <p>We aim to create a welcoming place for people to <strong>learn, build, collaborate and network</strong> with their peers, regardless of previous experience.</p>
                </div>

                <div className={styles.section}>
                    <h2>About the Website | Support</h2>
                    <p className={styles.nomargin}>Created in 2025 by Hiresh to support the Computing Society to help provide a clean, accessible starting point for students who have come for the first time, and to ease them towards more difficult problems. Also to help with management of a variety of skill levels available and mainly</p>
                    <p className={styles.nomargin}><strong> to eliminate the phrase "I don't know what to do"</strong></p>
                </div>

                <div className={styles.section}>
                    <h2>Support and Maintainance</h2>
                    <p>The website is currenlty Maintained by Hiresh</p>
                    <p>For any issues or support, please email <a href="mailto:20solankih@uptoncourtgrammar.org.uk
                            ?subject=Computing%20Society%20Support
                            &body=Please%20describe%20the%20issue%20:)"
                            target="_blank"
                            rel="noopener">
                            20solankih@uptoncourtgrammar.org.uk
                    </a></p>
                </div>
            </div>
        </>
    )
}

export default About