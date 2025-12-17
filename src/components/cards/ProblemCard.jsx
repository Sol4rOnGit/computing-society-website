import styles from './ProblemCard.module.css'
import { Link } from 'react-router-dom'

function ProblemCard({title="Default Title", description="Default description", p2="", isExternalLink="False", hrefTxt="Click here", href="/broken"}){
    return(
        <div className={styles.card}>
            <h1 className={styles.title}>{title}</h1>
            <p>{description}</p>
            {p2 === "" ? <p>{p2}</p> : null}
            {isExternalLink === "True" ? <a href={href} target="_blank" rel="noopener">{hrefTxt}</a> : <Link to={href}>{hrefTxt}</Link>}
        </div>
    )
}

export default ProblemCard