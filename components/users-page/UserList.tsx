'use client'

import useScreenSize from "@/hooks/useScreenSize"
import Card from "../card/Card"
import Status from "../status/Status"
import { THead, Table, Th } from "../table/Index"
import TBody from "../table/TBody"
import TData from "../table/TData"
import TRow from "../table/TRow"
import { DateJoinedFilter, EmailFilter, OrganizationFilter, PhoneNumberFilter, StatusFilter, UsernameFilter } from "./Filter"
import TablePopup from "./TablePopup"
import { Users } from "@/utils/types"
import React,{memo} from "react"
import moment from "moment"
import styles from './UserPage.module.scss'

type Props = {
    users: Users[]
}

const UserList:React.FC<Props> = ({users})=>{

    const {width} = useScreenSize()

    return(
        <Card sx={{padding:'30px', marginTop:40, overflowX:'auto', width:'100%'}}>
            <table className={styles['user-list-table']}>
                <thead>
                    <tr>
                    <th><div className={styles['table-header-container']}>organization <OrganizationFilter users={users}/></div></th>
                    <th><div className={styles['table-header-container']}>Username <UsernameFilter /></div></th>
                    <th><div className={styles['table-header-container']}>Email <EmailFilter /></div></th>
                    <th><div className={styles['table-header-container']}>Phone number <PhoneNumberFilter /></div></th>
                    <th><div className={styles['table-header-container']}>Date joined <DateJoinedFilter /></div></th>
                    <th><div className={styles['table-header-container']}>Status <StatusFilter /></div></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                        users?.map(({id, profile, createdAt})=>(
                            <tr key={id}>
                                <td>{profile.company}</td>
                                <td>{profile.username}</td>
                                <td width="250px">{profile.email}</td>
                                <td width="150px">{profile.phoneNumber}</td>
                                <td width="120px">{moment(createdAt).format('DD-MM-YYYY')}</td>
                                <td width="50px"><Status label={profile.status} type={profile.status}/></td>
                                <td><TablePopup id={profile.id} status={profile.status}/></td>
                            </tr>
                        ))
                    }
                </tbody>
                {/* <TBody>
 
                    {
                        users?.map(({id, profile, createdAt})=>(
                            <TRow key={id}>
                                <TData>{profile.company}</TData>
                                <TData>{profile.username}</TData>
                                <TData width="250px">{profile.email}</TData>
                                <TData width="150px">{profile.phoneNumber}</TData>
                                <TData width="120px">{moment(createdAt).format('DD-MM-YYYY')}</TData>
                                <TData width="50px"><Status label={profile.status} type={profile.status}/></TData>
                                <TData><TablePopup id={profile.id} status={profile.status}/></TData>
                            </TRow>
                        ))
                    }
                    
                </TBody> */}
            </table>
        </Card>
    )
}

export default memo(UserList)