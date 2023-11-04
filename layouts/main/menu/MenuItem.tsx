'use client'

import styles from './Menu.module.scss'
import Link from 'next/link'
import Icon from '@/icons'
import { usePathname } from 'next/navigation'
import Popup from '@/components/popup/Popup'


type MenuItemProps = {
    label:string,
    target?:string,
    icon: string,
    sx?:React.CSSProperties,
    dropdownItem?:React.ReactNode
}
const MenuItem = ({label,target="#", sx, icon, dropdownItem}:MenuItemProps)=>{

    const pathname = usePathname().split('/')

    const isActive = "/"+pathname[1]+'/'+pathname[2] === target
   

    return(
        <li className={styles["menu-item"]} style={sx}>
           <Link href={target} className={isActive ? styles['active']: ''}>
            <Icon name={icon} width='16px'/>
            <span>{label}</span>
           </Link>
          {dropdownItem && ( <div className={styles['menu-item-icon-wrapper']}><Popup position="right" width="170px" icon={{name:"chevron-down", width:14, height:14}}>
               {dropdownItem}
            </Popup></div>)}
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