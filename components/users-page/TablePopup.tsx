'use client'
import { useState, memo } from "react"
import Popup from "../popup/Popup"
import styles from './UserPage.module.scss'
import Icon from "@/icons"
import Link from "next/link"

type TablePopupProps = {
    id:string,
    status:string
}

const TablePopup:React.FC<TablePopupProps> = ({id, status})=>{
    
    const statusLabel = status === 'active' ? 'Blacklist User' : 'Activate User'
    const statusIcon = status === 'active' ? 'blacklist' : 'activate-user'


    return(
        <Popup icon={{name:"more-vertical"}}>
            <ul className={styles['table-popup-menu']}>
                <li className={styles['popup-list']}><Icon name='eye'/><Link href={`/customers/users/${id}`}>View Details</Link></li>
                {
                    ['blacklisted','inactive','active'].includes(status) && <li className={styles['popup-list']}><Icon name={statusIcon}/><span onClick={()=>{}}>{statusLabel}</span></li>
                }
            </ul>
        </Popup>
    )
}

export default memo(TablePopup)