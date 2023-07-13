import styles from '../css/titleModal.module.css'



export const TitleModal = (props: {title:string, body:string, variant: any}) => {
    return(
        <div className={styles.main} style={{height: props.variant.interactive ? "595px" : "460px"}}>
            <div className={styles.top}>
                <span>{props.title}</span>
            </div>
            <div className={styles.middle}>
                <div className={styles.bodyLeft}>
                    <span>{props.body}</span>
                </div>
                <div className={styles.bodyRight}>
                    <div className={styles.image}></div>
                </div>
            </div>
            {props.variant.interactive ? (
                <div className={styles.bottom}>
                    <div className={styles.button}>{props.variant.buttonText}</div>
                </div>
            ) : null}
        </div>
    )
}