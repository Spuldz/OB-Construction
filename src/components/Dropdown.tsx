import { useNavigate } from 'react-router-dom'
import styles from '../css/dropdown.module.css'

export const Dropdown = (props: {onEnter:Function, onLeave:Function}) => {

    const nav = useNavigate()

    return(
        <div className={styles.main}
        onMouseEnter={() => props.onEnter()}
        onMouseLeave={() => props.onLeave()}>
            <div onClick={() => nav("/ieklasana")}>Bruģēšana</div>
            <div onClick={() => nav("/labiekartosana")}>Pagalmu Labiekārtošana</div>
            <div onClick={() => nav("/koka-mebeles")}>Koka Mēbeles</div>
            <div onClick={() => nav("/renovacija")}>Renovācija</div>
        </div>
    )
}