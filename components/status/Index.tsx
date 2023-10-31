import styles from './Status.module.scss'

type StatusProps = {
    label:string,
    type: 'inactive' | 'active' | 'blacklisted' | 'pending'
}


const Status:React.FC<StatusProps> = ({label,type})=>{

    return(
        <div className={`${styles.status} ${styles[type]}`}>
            {label}
        </div>
    )
}

export default Status