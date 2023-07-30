import styles from '../css/dropdown.module.css'

export const Dropdown = (props: {onEnter:Function, onLeave:Function}) => {
    return(
        <div className={styles.main}
        onMouseEnter={() => props.onEnter()}
        onMouseLeave={() => props.onLeave()}>
            <div>Bruģēšana</div>
            <div>Pagalmu Labiekārtošana</div>
            <div>Koka Mēbeles</div>
            <div>Renovācija</div>
        </div>
    )
}