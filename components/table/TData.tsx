import React,{ PropsWithChildren } from 'react'
import styles from './table.module.scss'


type Props = PropsWithChildren<{}> & {
    sx?:React.CSSProperties
}

const TData:React.FC<Props> = ({children,sx})=>{

    return(
        <div className={styles.tdata} style={sx}>
            {children}
        </div>
    )
}

export default TData