import React,{ PropsWithChildren } from 'react'
import styles from './Table.module.scss'


type Props = PropsWithChildren<{}> & {
    sx?:React.CSSProperties,
    ellipsis?:boolean,
    width?:string
}

const TData:React.FC<Props> = ({children,width,sx,ellipsis=false})=>{

    return(
        <div className={`${styles.tdata} ${ellipsis ? styles['ellipsis']:''}`} style={{...sx, minWidth:width}}>
            {children}
        </div>
    )
}

export default TData