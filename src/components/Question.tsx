import styles from '../css/question.module.css'
import plus from '../assets/plus.svg'
import minus from '../assets/minus.svg'
import { useState } from 'react'

export const Question = (props: {q:string, a:string}) => {

    const [closed, setClosed] = useState<boolean>(true);


    return(
        <div className={styles.main}>
            <div className={styles.top}>
                <img src={closed ? plus : minus} onClick={() => setClosed(!closed)} style={{cursor: 'pointer'}}/>
                <span style={{cursor: 'pointer'}} onClick={() => setClosed(!closed)}>{props.q}</span>
            </div>
            {!closed ? (
                <div className={styles.bottom}>
                    <span>{props.a}</span>
                </div>
            ) : null}
        </div>
    )
}