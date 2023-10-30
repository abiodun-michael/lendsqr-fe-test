import Link from 'next/link'
import styles from './header.module.scss'
import Icon from '@/icons'


const Navigation = ()=>{

    return(
        <nav className={styles.nav}>
            <ul>
                <li><Link href="#">Docs</Link></li>
                <li><Icon name='bell' width="26px" height="26px"/></li>
                <Avatar />
            </ul>

        </nav>
    )
}

export default Navigation



const Avatar = ()=>{

    return(
        <li className={styles.avatar}>
            <img src='/avatar.png' />
            <div className={styles['avatar-desc']}>
                <span>Adedeji</span>
                <Icon name='dropdown'/>
            </div>
        </li>
    )
}