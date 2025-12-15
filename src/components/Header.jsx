//Styles
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <div className={styles.main}>
            <ul className={styles.nav}>
                <h3>Official UCGS Computing Society Website</h3>
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