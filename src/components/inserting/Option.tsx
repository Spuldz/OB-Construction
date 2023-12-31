import styles from '../../css/inserting/option.module.css'

type Data = {
    image: string,
    title: string,
    text: string,
    long: boolean
}

export const Option = (props: {data: Data}) => {
    return(
        <div className={props.data.long ? styles.mainLong : styles.main}>
            <div className={styles.top}>
                <div className={styles.img}
                style={{backgroundImage: "URL("+props.data.image+")"}}></div>
            </div>
            <div className={styles.middle}>
                <span>{props.data.title}</span>
            </div>
            <div className={styles.bottom}>
                <span>{props.data.text}</span>
            </div>
        </div>
    )
}