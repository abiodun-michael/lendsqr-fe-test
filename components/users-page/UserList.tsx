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

type Props = {
    users: Users[]
}

const UserList:React.FC<Props> = ({users})=>{

    const {width} = useScreenSize()

    const isOverflow = width <= 480 ? 'auto':'visible'

    return(
        <Card sx={{padding:'30px', marginTop:40, overflowX:isOverflow}}>
            <Table>
                <THead>
                    <Th
                        renderFilter={<OrganizationFilter users={users}/>}>organization</Th>
                    <Th
                        renderFilter={<UsernameFilter />}>Username</Th>
                    <Th
                        renderFilter={<EmailFilter />}>Email</Th>
                    <Th
                        renderFilter={<PhoneNumberFilter />}>Phone number</Th>
                    <Th
                        renderFilter={<DateJoinedFilter />}>Date joined</Th>
                    <Th
                        renderFilter={<StatusFilter />}>Status</Th>
                        <Th sx={{flex:0.2}}></Th>
                </THead>
                <TBody>
                    {
                        users?.map(({id, profile, createdAt})=>(
                            <TRow key={id}>
                                <TData>{profile.company}</TData>
                                <TData>{profile.username}</TData>
                                <TData ellipsis>{profile.email}</TData>
                                <TData>{profile.phoneNumber}</TData>
                                <TData>{moment(createdAt).format('DD-MM-YYYY')}</TData>
                                <TData><Status label={profile.status} type={profile.status}/></TData>
                                <TData sx={{ flex:0.2}}><TablePopup id={profile.id} status={profile.status}/></TData>
                            </TRow>
                        ))
                    }
                    
                </TBody>
            </Table>
        </Card>
    )
}

export default memo(UserList)