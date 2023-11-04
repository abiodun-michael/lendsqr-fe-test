'use client'

import { Users } from "@/utils/types"
import Card from "../card/Card"
import Stars from "../star/Star"
import Tabs from "../tabs/Tabs"
import styles from './UserDetailsPage.module.scss'

const cardStyle = {
    borderRadius: "4px",
    border: "1px solid rgba(33, 63, 125, 0.06)",
    boxShadow: "3px 5px 20px 0px rgba(0, 0, 0, 0.04)"
}

type UserDetailsHeaderProps = {
    onTabChange:(v:string)=>void,
    user:Users
}

const UserDetailsHeader:React.FC<UserDetailsHeaderProps> = ({user, onTabChange=()=>{}})=>{

    const tabItems = [
        {
            label:"General Details",
            tabKey: 'general-details',
        },
        {
            label:"Documents",
            tabKey: 'documents',
        },
        {
            label:"Bank Details",
            tabKey: 'bank-details',
        },
        {
            label:"Loans",
            tabKey: 'loans',
        },
        {
            label:"Savings",
            tabKey: 'savings',
        },
        {
            label:"App and System",
            tabKey: 'app-and-systems',
        }
    ]

    return(
        <Card sx={{marginTop:40, marginBottom:30, padding:30, paddingBottom:0, ...cardStyle}}>
            <div className={styles['user-details-header']}>
                <img src="/avatar.svg" className={styles.avatar}/>
                <div className={styles['user-details-name']}>
                    <p className={styles['user-details-name-main']}>{user.profile.firstName} {user.profile.lastName}</p>
                    <p className={styles['user-details-name-sub']}>LSQFf587g90</p>
                </div>
                <div className={styles['user-details-tier']}>
                    <p className={styles['user-details-tier-label']}>User’s Tier</p>
                    <Stars filled={user.profile.tier} count={3}/>
                </div>
                <div className={styles['user-details-account-info']}>
                    <p className={styles['user-details-account-balance']}>₦{user.bankInfo.balance}</p>
                    <p className={styles['user-details-account-number']}>{user.bankInfo.accountNumber}/{user.bankInfo.bank}</p>
                </div>
            </div>
            <Tabs 
                onChange={onTabChange}
                defaultActiveTab={"general-details"}
                sx={{marginLeft:6, marginTop:61}} list={tabItems}
                />
        </Card>
    )
}

export default UserDetailsHeader