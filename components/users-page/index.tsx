'use client'

import { useEffect, useState, memo } from "react"
import UserAnalytics from "./user-analytics"
import UserList from "./user-list"
import axios from "axios"
import { Strings } from "@/utils/constants"
import { Users } from "@/utils/types"
import { useSearchParams } from "next/navigation"
import moment from "moment"
const { ShimmerButton } = require("react-shimmer-effects")



const UsersPage = ()=>{
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState<Users[]>([])

    const searchParams = useSearchParams()
    const username = decodeURIComponent(searchParams.get("username") || '').toLocaleLowerCase()
    const email = decodeURIComponent(searchParams.get("email") || '').toLocaleLowerCase()
    const phoneNumber = decodeURIComponent(searchParams.get("phone") || '').toLocaleLowerCase()
    const date = decodeURIComponent(searchParams.get("date") || '').toLocaleLowerCase()
    const organization = decodeURIComponent(searchParams.get("organization") || '').toLocaleLowerCase()
    const status = decodeURIComponent(searchParams.get("status") || '').toLocaleLowerCase()

    const fetchData = async()=>{
        setLoading(true)
       try{
        const storedData = localStorage.getItem(Strings.data)
        if(storedData){
            const parsedStoredData = JSON.parse(storedData)
            setUsers(parsedStoredData)
        }else{
            const {data} = await axios.get('https://api.json-generator.com/templates/TtS2vtn86iVJ/data?access_token=54sy082frz5xhd3gujqan72cokttxinrd09ahyo6')
            localStorage.setItem(Strings.data, JSON.stringify(data))
            setUsers(data)
        }
        }catch(err:any){
            console.log(err)
        }
        finally{
        setLoading(false)
       }
    }

    let filteredUsers = users.filter(user=>user.profile.username.toLocaleLowerCase().includes(username))
    .filter(user=>user.profile.email.includes(email))
    .filter(user=>user.profile.phoneNumber.includes(phoneNumber))
    .filter(user=>moment(user.createdAt).format('DD-MM-YYYY').includes(date))
    .filter(user=>user.profile.company.toLocaleLowerCase().includes(organization))
    .filter(user=>user.profile.status.toLocaleLowerCase().includes(status))
    
    

    useEffect(()=>{
        fetchData()
    },[])

    return(
       loading ? <ShimmerButton size="md" />:
       <>
       <UserAnalytics users={filteredUsers}/>
       <UserList users={filteredUsers}/>
       </>
    )
}

export default memo(UsersPage)