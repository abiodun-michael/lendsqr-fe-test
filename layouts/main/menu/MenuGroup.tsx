import { ComponentProps } from 'react'
import styles from './Menu.module.scss'

type MenuGroupProps = ComponentProps<"div"> & {
    title: string
}

const MenuGroup = ({children, title}:MenuGroupProps)=>{

    return(
        <div className={styles['menu-group']}>
            <p className={styles['menu-group-title']}>{title}</p>
            {children}
        </div>
    )
}

export default MenuGroup