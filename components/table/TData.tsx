import React,{ PropsWithChildren } from 'react'
import styles from './table.module.scss'


type Props = PropsWithChildren<{}>

const TData:React.FC<Props> = ({children})=>{

    return(
        <div className={styles.tdata}>
            {children}
        </div>
    )
}

export default TData