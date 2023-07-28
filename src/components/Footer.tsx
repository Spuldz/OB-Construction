import styles from '../css/footer.module.css'

import logo from '../assets/logo-small.svg'
import { useState } from 'react'

export const Footer = () => {

    const [clicked, setClicked] = useState(false)

    return(
        <div className={styles.main}>
            <div className={styles.image}></div>
            <div className={styles.top}>
                <div>
                <span>Ja vēl neesat pārliecināts, kā labāk iekārtot savu pagalmu, mēs ar prieku sniegsim jums palīdzību</span>
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.middleLeft}>
                    <div className={styles.middleLeftInfo}>
                        <span>Mēs vēlamies būt atpazīstami kā uzņēmums, kas piedāvā izcilus pakalpojumus, palīdzot cilvēkiem
                        radīt skaistus, funkcionālus un ilgtspējīgus pagalums.</span>
                    </div>
                    <br/>
                    <div className={!clicked ? styles.btn : styles.btn_active}
                    onMouseDown={() => setClicked(true)}
                    onMouseUp={() => setClicked(false)}>
                        Padomā kāds projekts? Sazinamies!
                    </div>
                </div>
                <div className={styles.middleRight}>
                </div>
            </div>
            <div className={styles.bottom}>
                <span>(c) 2023  SIA OB Constructions. Visas tiesības aizsargātas.</span>
                <div></div>
            </div>
        </div>
    )
}