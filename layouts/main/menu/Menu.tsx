import styles from './Menu.module.scss'
import { ComponentProps } from 'react'

type MenuProps = ComponentProps<"ul">

const Menu = ({children}:MenuProps)=>{

    return(
        <ul className={styles.menu}>
            {children}
        </ul>
    )
}

export default Menu
