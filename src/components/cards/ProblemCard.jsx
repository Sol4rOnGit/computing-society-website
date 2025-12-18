import styles from './ProblemCard.module.css'
import { Link } from 'react-router-dom'

function ProblemCard({title="Default Title", description="Default description", p2="", isButton="False", isExternalLink="False", hrefTxt="Click here", href="/broken"}){
    return(
        <div className={styles.card}>
            <h1 className={styles.title}>{title}</h1>
            <p>{description}</p>
            {p2 === "" ? null : <p>{p2}</p>}
            {isButton === "True" ? (isExternalLink === "True" ? <a href={href} target="_blank" rel="noopener">{hrefTxt}</a> : <Link to={href}>{hrefTxt}</Link>) : null}
        </div>
    )
}

export default ProblemCard