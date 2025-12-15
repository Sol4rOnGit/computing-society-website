//Styles
import styles from './LandingCard.module.css'
import { Link } from 'react-router-dom'

function LandingCard({title="Default Title", description="Default Description", linkText="Default button", linkHref="/broken"}){
    return(
        <div className={styles.cardWrapper}>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={linkHref} className={styles.link} target="_blank" rel="noopener">{linkText}</Link>
        </div>
    )
}

export default LandingCard