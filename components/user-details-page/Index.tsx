'use client'

import { useCallback, useEffect, useState } from 'react'
import UserDetailsHeader from './UserDetailsHeader'
import styles from './UserDetailsPage.module.scss'
import UserDetailsTop from './UserDetailsTop'
import UserGeneralDetails from './UserGeneralDetails'
import UserDocuments from './UserDocuments'
import { Strings } from '@/utils/constants'
import { useParams,useRouter } from 'next/navigation'
import { Users } from '@/utils/types'


const UserDetailsPage = ()=>{
    const [user, setUser] = useState<Users>()

    const router = useRouter()
    const params = useParams()

    const [tab, setTab] = useState<string>('')


   const handleTabChange = useCallback((value:string)=>{
        setTab(value)
   },[])


   useEffect(()=>{
        const storedData = localStorage.getItem(Strings.data)
        if(storedData){
            const users = JSON.parse(storedData)
            const index = users.findIndex((e:Users)=>e.profile.id === params.id)
            if(index > -1){
                setUser(users[index])
            }else{
                router.back()
            }
        }else{
            router.back()
        }
   },[])

    return(
        <div className={styles['user-details-container']}>
            {user && <UserDetailsTop user={user}/>}
            {user && <UserDetailsHeader user={user} onTabChange={handleTabChange}/>}
            {tab === 'general-details' && user && (<UserGeneralDetails user={user}/>)}
            {tab === 'documents' && (<UserDocuments />)}
        </div>
    )
}

export default UserDetailsPage