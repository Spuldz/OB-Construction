import styles from '../css/footer.module.css'

import logo from '../assets/logo-small.svg'

export const Footer = () => {
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
                    <div>
                        <span>Mēs vēlamies būt atpazīstami kā uzņēmums, kas piedāvā izcilus pakalpojumus, palīdzot cilvēkiem
                        radīt skaistus, funkcionālus un ilgtspējīgus pagalums.</span>
                    </div>
                    <br/>
                    <div className={styles.btn}>
                        <span>Padomā kāds projekts? Sazinamies!</span>
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