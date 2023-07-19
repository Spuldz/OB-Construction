import styles from '../css/infoCard.module.css'
import arrowLeft from '../assets/arrowLeft.svg'
import arrowRight from '../assets/arrowRight.svg'
import karlis from '../assets/karlis.png'

type Info = {
    name: string
    clientPhoto: string
    examplePhoto: string
}

export const InfoCard = (props: {info:Info}) => {

    return(
        <div className={styles.main}>
            <div className={styles.arrowLeft}>
                <img src={arrowLeft}/>
            </div>
            <div className={styles.card}>
                <div className={styles.cardLeft}>
                    <div className={styles.client} style={{
                        backgroundImage: "URL("+props.info.clientPhoto+")"
                    }}></div>
                    <span>{props.info.name}</span>
                </div>
                <div className={styles.cardMiddle}>
                    <span>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in fermentum posuere urna nec tincidunt.”</span>
                </div>
                <div className={styles.cardRight}>
                    <div className={styles.examplePhoto} style={{
                        backgroundImage: "URL("+props.info.examplePhoto+")"
                    }}></div>
                </div>
            </div>
            <div className={styles.arrowRight}>
                <img src={arrowRight}/>
            </div>
        </div>
    )
}