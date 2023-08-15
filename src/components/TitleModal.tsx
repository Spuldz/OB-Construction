import { useState } from 'react'
import styles from '../css/titleModal.module.css'



export const TitleModal = (props: {title:string, body:string, variant: any}) => {

    const [clicked, setClicked] = useState(false)

    return(
        <div className={props.variant.interactive ? styles.main : styles.main2}>
            <div className={styles.top}>
                <span>{props.title}</span>
            </div>
            <div className={styles.middle}>
                <div className={props.variant.interactive ? styles.bodyLeft : styles.bodyLeft2}>
                    <span>{props.body}</span>
                </div>
                <div className={styles.bodyRight}>
                    <div className={styles.image}></div>
                </div>
            </div>
            {props.variant.interactive ? (
                <div className={styles.bottom}>
                    <div className={!clicked ? styles.button : styles.button_active}
                     onMouseDown={() => setClicked(true)}
                     onMouseUp={() => setClicked(false)}>{props.variant.buttonText}</div>
                </div>
            ) : null}
        </div>
    )
}