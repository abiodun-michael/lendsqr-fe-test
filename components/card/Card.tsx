import styles from './card.module.scss'
import React, {ComponentProps} from 'react'

type CardProps = ComponentProps<"div"> & {
    children: React.ReactNode,
    sx?:React.CSSProperties
}

const Card = ({children,sx}:CardProps)=>{

    return(
        <div className={styles.card} style={sx}>
            {children}
        </div>
    )
}

export default Card