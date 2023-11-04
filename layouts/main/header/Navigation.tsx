import Link from 'next/link'
import styles from './Header.module.scss'
import Popup from '@/components/popup/Popup'


const Navigation = ()=>{

    return(
        <nav className={styles.nav}>
            <ul>
                <li><Link href="#">Docs</Link></li>
                <li><Popup icon={{name:"bell", width:"26px", height:"26px"}} width={400} height={200} sx={{top:50}}>
                    <p>Notification here</p>
                </Popup></li>
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
                <Popup icon={{name:"dropdown"}} width={200} height={100} sx={{top:50}}>
                    <p>Menu here</p>
                </Popup>
            </div>
        </li>
    )
}