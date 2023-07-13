import styles from '../css/footer.module.css'
import send from '../assets/send.svg'

export const Footer = () => {

    return(
        <div className={styles.main}>
            <div className={styles.left}>
                <span className={styles.title}>Padomā<br/> kāds<br/> projekts?</span>
                <br/>
                <p>Aizpildiet doto anketu, un mēs ar jums sazināsimies,<br/>
                     izmantojot jūsu norādīto tālruņa numuru vai epasta adresi,<br/> kad vien tas būs iespējams.
                </p>
                <div className={styles.info}>
                    <span style={{color: "#9A7426"}}>info@obconstruction.lv</span>
                    <span style={{color: "#F5F5F5"}}>+371 27 767 420</span>
                </div>
                <span className={styles.leftBottomText}>
                    2023 OBConstruction. Visas tiesības aizsargātas.
                </span>
            </div>
            <div className={styles.right}>
                <div>
                    <label htmlFor='nameInput'>Vārds</label>
                    <br/>
                    <input id='nameInput'className={styles.textInputLarge} placeholder='Vārds'/>
                </div>
                <div>
                    <label htmlFor='emailInput'>Jūsu e-pasta adrese</label>
                    <br/>
                    <input id='emailInput' className={styles.textInputLarge} placeholder='Ēpasts'/>
                </div>
                <div>
                    <label htmlFor='textareaInput'>Pastāstiet par savu projektu</label>
                    <br/>
                    <textarea className={styles.textarea} id='textareaInput'></textarea>
                </div>
                <div className={styles.question}>
                    <div>
                        <label>Jautājums 1</label>
                        <br/>
                        <input className={styles.textInputSmall}/>
                    </div>
                    <div>
                        <label>Jautājums 2</label>
                        <br/>
                        <input className={styles.textInputSmall}/>
                    </div>
                </div>
                <div className={styles.btn}>
                    <span>Saņemt bezmaksas konsultāciju</span>
                    <img src={send}/>
                </div>
            </div>
        </div>
    )
}