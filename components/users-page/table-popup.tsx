'use client'
import { useState, useRef } from "react"
import Popup from "../popup"
import styles from './user-page.module.scss'
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
                <li className={styles['popup-list']}><Icon name='eye'/><Link href="/dashboard/customers/users">View Details</Link></li>
                <li className={styles['popup-list']}><Icon name={statusIcon}/><span onClick={()=>{}}>{statusLabel}</span></li>
            </ul>
        </Popup>
    )
}

export default TablePopup