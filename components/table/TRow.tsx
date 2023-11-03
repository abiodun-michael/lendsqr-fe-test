import { PropsWithChildren } from 'react'
import styles from './Table.module.scss'


type Props = PropsWithChildren<{}>

const TRow:React.FC<Props> = ({children})=>{

    return(
        <div className={styles.trow}>
            {children}
        </div>
    )
}

export default TRow