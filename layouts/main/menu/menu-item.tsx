import styles from './menu.module.scss'
import Link from 'next/link'
import Icon from '@/icons'

type MenuItemProps = {
    label:string,
    target?:string,
    icon: string
}
const MenuItem = ({label,target="#", icon}:MenuItemProps)=>{

    return(
        <li className={styles["menu-item"]}>
           <Link href={target}>
            <Icon name={icon} width='16px'/>
            <span>{label}</span>
           </Link>
        </li>
    )
}

export default MenuItem



export const LogoutMenuItem = ()=>{

    return(
        <div className={styles['sidebar-footer']}>
            <div className={styles.logout}>
                <Icon name='logout' width='16px' height='16px' />
                <span>Logout</span>
            </div>
            <p className={styles.version}>v1.2.0</p>
        </div>
    )
}