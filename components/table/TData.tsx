import React,{ PropsWithChildren } from 'react'
import styles from './Table.module.scss'


type Props = PropsWithChildren<{}> & {
    sx?:React.CSSProperties,
    ellipsis?:boolean
}

const TData:React.FC<Props> = ({children,sx,ellipsis=false})=>{

    return(
        <div className={`${styles.tdata} ${ellipsis ? styles['ellipsis']:''}`} style={sx}>
            {children}
        </div>
    )
}

export default TData