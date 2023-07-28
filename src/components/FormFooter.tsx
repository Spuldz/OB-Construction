import styles from '../css/formFooter.module.css'
import send from '../assets/send.svg'
import { useState } from 'react'

export const FormFooter = () => {

    const [clicked, setClicked] = useState(false)

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
                <div className={styles.agreement}>
                    <input type='checkbox'/>
                    <span>Piekrītu obconstructions.lv privātuma politikai</span>
                </div>
                <div className={!clicked ? styles.btn : styles.btn_active}
                onMouseDown={() => setClicked(true)}
                onMouseUp={() => setClicked(false)}>
                    <span>Saņemt bezmaksas konsultāciju</span>
                    <img src={send}/>
                </div>
            </div>
        </div>
    )
}