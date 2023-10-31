import { PropsWithChildren } from 'react'
import styles from './table.module.scss'

type Props = PropsWithChildren<{}>

const TBody:React.FC<Props> = ({children})=>{

    return(
        <div className={styles.tbody}>
            {children}
        </div>
    )
}

export default TBody