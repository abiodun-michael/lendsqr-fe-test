import React, { PropsWithChildren } from 'react'
import styles from './table.module.scss'

type Props = PropsWithChildren<{}> & {
    sx?:React.CSSProperties
}

const THead:React.FC<Props> = ({children})=>{

    return(
        <div className={styles['table-header']}>
            {children}
        </div>
    )
}

export default THead