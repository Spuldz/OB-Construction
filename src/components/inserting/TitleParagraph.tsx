import styles from '../../css/inserting/TitleParagraph.module.css'

type Data = {
    title: string,
    text: string
}

//H-221px
//W-413px

export const TitleParagraph = (props: {data:Data}) => {
    return(
        <div className={styles.main}>
            <div className={styles.top}>
                <span>{props.data.title}</span>
            </div>
            <div className={styles.bottom}>
                <span>{props.data.text}</span>
            </div>
        </div>
    )
}