import styles from './user-details-page.module.scss'
import { Button } from '../widgets'
import React from 'react'
import { Users } from '@/utils/types'


type UserDetailsTopProps = {
    user:Users
}

const UserDetailsTop:React.FC<UserDetailsTopProps> = ({user})=>{

    return(
        <div className={styles['user-detailes-top']}>
        <p className={styles['user-details-page-title']}>User Details</p>
        <div className={styles['user-details-top-cta-group']}>
            {user.profile.status === 'active' ? <Button sx={{height:40, fontSize:"1rem", fontFamily:'Work Sans', letterSpacing:'1.4px', borderColor:'#E4033B', color:'#E4033B'}}>BLACKLIST USER</Button>:
            <Button sx={{height:40, fontSize:"1rem", fontFamily:'Work Sans', letterSpacing:'1.4px', borderColor:'#39CDCC', color:'#39CDCC'}}>ACTIVATE USER</Button>}
        </div>
        </div>
    )
}

export default UserDetailsTop