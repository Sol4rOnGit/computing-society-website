//Modules
import TypeWriter from 'typewriter-effect';

//Components
import Header from "../components/Header";

import LandingCard from '../components/cards/LandingCard';

//Styles
import styles from './Landing.module.css';

function Landing(){
    return(
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Welcome to the <span className={styles.UCGS}>UCGS</span> <span className={styles.CSDpt}>Computing Department</span></h1>
                    {/*<img src="/src/img/CompSocLogoEST.png" alt="CSLogo" />*/}

                    <h3><span className={styles.dynamicTxt}>
                            <TypeWriter
                            options={{
                                strings: ['Learn Computer Science', 'Resources', 'Questions', 'Data Structures & Algorithms'],
                                autoStart: true,
                                loop: true,
                                delay: 100,
                                deleteSpeed: 130,
                            }}
                            wrapperClassName={styles.dynamic} // style the wrapper
                            wrapper="span" // force it to render as <span> instead of <div>
                            />
                    </span></h3>

                    <div className={styles.cardHolder}>
                        <LandingCard title="Resources"
                                     description="Check back later for lots of resources we'll have pulled together everything you need to succeed here."
                                     linkText="Go to resources"
                                     />
                        
                        <LandingCard title="Questions"
                                     description="We are to add lots of questions from all levels of difficulty. For now try leetcode for experienced programmers: https://leetcode.com/"
                                     linkText="Try problems"
                                     linkHref='/problems'
                                     />
                        
                        <LandingCard title="Get Involved"
                                     description="Have any ideas for Computing Society? Let us know (every Tuesday lunchtime in Lasher's room)"
                                     linkText="Get started"
                                     linkHref="/about"
                                     />
                    </div>
                </div>
                <div className={styles.Footer}>
                    <p>Built By Hiresh | 2025</p>
                </div>
            </div>
        </>
    )
}

export default Landing