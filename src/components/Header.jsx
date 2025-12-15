//Styles
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <div className={styles.main}>
            <ul className={styles.nav}>
                <div className={styles.left}>
                    {/*<img className={styles.logo} src="src/img/UCGS_logo.webp" alt="" />*/} {/* Logo if anyone wants */}
                    <h3 className={styles.CompSocTitle}>UCGS Comp Soc</h3>
                    {/*<img src="/src/img/CompSocLogoEST.png" alt="Logo" />*/}
                </div>
                <div className={styles.stack}>
                    <li className={styles.element}><Link to="/">Home</Link></li>
                    <li className={styles.element}><Link to="/about">About</Link></li>
                    <li className={styles.element}><Link to="/problems"><span className={styles.ProblemsTxt}>Problems</span></Link></li>
                </div>
            </ul>
        </div>
    )
}

export default Header