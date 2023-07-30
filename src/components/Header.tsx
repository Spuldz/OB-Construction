import styles from '../css/header.module.css'

import logoSmall from '../assets/logo-small.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Dropdown } from './Dropdown'

export const Header = () => {

    const [isHovering, setIsHovering] = useState(false)
    const [width, setWidth] = useState<number>(window.innerWidth);

    const nav = useNavigate()

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return(
        <>
        <div className={styles.header}>
            <div className={styles.left}>
                <img src={logoSmall} className={styles.logo}/>
            </div>
            <div className={styles.right}>
                <div className={styles.linkWrapper}>
                    <span><Link to={"/"} className={styles.link}>SĀKUMS</Link></span>
                    <span><span className={styles.link}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => {
                      //  setIsHovering(false)
                    }}
                    onClick={() => width <= 1280 ? setIsHovering(true) : nav("/pakalpojumi")}>PAKALPOJUMI</span></span>
                    <span><Link to={"/darbi"} className={styles.link}>MŪSU DARBI</Link></span>
                    <span><Link to={"/kontakti"} className={styles.link}>KONTAKTI</Link></span>
                </div>
                
                <div className={styles.socialMediaWrapper}>
                    <div className={styles.socialMedia} style={{backgroundImage: "URL("+twitter+")"}}></div>
                    <div className={styles.socialMedia} style={{backgroundImage: "URL("+instagram+")"}}></div>
                    <div className={styles.socialMedia} style={{backgroundImage: "URL("+facebook+")"}}></div>
                </div>
            </div>
        </div>
        {isHovering ? (
            <Dropdown onEnter={() => setIsHovering(true)} onLeave={() => setIsHovering(false)}/>
        ) : null}
        </>
    )
}