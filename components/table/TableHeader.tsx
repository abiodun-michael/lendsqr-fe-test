import React, { PropsWithChildren } from 'react'
import styles from './Table.module.scss'

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