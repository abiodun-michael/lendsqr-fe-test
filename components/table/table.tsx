import React,{ PropsWithChildren } from "react"
import styles from './Table.module.scss'

type Props = PropsWithChildren<{}>


const Table:React.FC<Props> = ({children})=>{

    return(
        <div className={styles.table}>
            {children}
        </div>
    )
}

export default Table