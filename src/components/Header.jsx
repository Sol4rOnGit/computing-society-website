//Styles
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <div className={styles.main}>
            <ul className={styles.nav}>
                <div className={styles.left}>
                    {/*<img className={styles.logo} src="src/img/UCGS_logo.webp" alt="" />*/} {/* Logo if anyone wants */}
                    <h3>Official UCGS Computing Society Website</h3>
                </div>
                <div className={styles.stack}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/problems">Problems</Link></li>
                </div>
            </ul>
        </div>
    )
}

export default Header