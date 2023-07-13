import styles from '../css/header.module.css'

import logoSmall from '../assets/logo-small.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import { Link } from 'react-router-dom'

export const Header = () => {

    return(
        <div className={styles.header}>
            <div className={styles.left}>
                <img src={logoSmall} className={styles.logo}/>
            </div>
            <div className={styles.right}>
                <span><Link to={"/"} className={styles.link}>SĀKUMS</Link></span>
                <span><Link to={"/pakalpojumi"} className={styles.link}>PAKALPOJUMI</Link></span>
                <span><Link to={"/darbi"} className={styles.link}>MŪSU DARBI</Link></span>
                <span><Link to={"/kontakti"} className={styles.link}>KONTAKTI</Link></span>
                
                <div className={styles.socialMedia} style={{backgroundImage: "URL("+twitter+")"}}></div>
                <div className={styles.socialMedia} style={{backgroundImage: "URL("+instagram+")"}}></div>
                <div className={styles.socialMedia} style={{backgroundImage: "URL("+facebook+")"}}></div>
            </div>
        </div>
    )
}