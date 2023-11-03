'use client'

import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Button, TextField } from "../widgets"
import styles from './UserPage.module.scss'
import React, { useEffect, useState } from "react"
import DateField from "../widgets/date/Index"
import Select from "../widgets/select"
import { Users } from "@/utils/types"

const inputStyle = {height:40, borderRadius:8,outline:0, borderWidth:1}
const buttonStyle = {width:98, height:40, borderRadius:8}


type Props = {users:Users[]}


export const OrganizationFilter:React.FC<Props> = ({users})=>{
    const [state, setState] = useState("")

    const options = users.map((user)=>({label:user.profile.company,value:user.profile.company.toLocaleLowerCase()}))

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleFilter = ()=>{
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
        
        if (!state) {
            current.delete("organization");
        } else {
            current.set("organization", state);
        }
        
        const search = current.toString();
        const query = search ? `?${search}` : "";
    
        router.push(`${pathname}${query}`);

    }

    const handleReset = ()=>{
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
        
        current.delete("organization");

        const search = current.toString();
        const query = search ? `?${search}` : "";
    
        router.push(`${pathname}${query}`);

        setState("")
    }

    useEffect(()=>{
        const organization = decodeURIComponent(searchParams.get("organization") || '')
        setState(organization)
    },[])


    return (
        <>
        <Select 
            inputSx={inputStyle}
            placeholder="Organization" 
            label="Organization"
            value={state}
            data={options}
            onChange={(e)=>setState(e.target.value)}
        />

        <div className={styles['filter-button-group']}>
            <Button onClick={handleReset} sx={buttonStyle}>Reset</Button>
            <Button onClick={handleFilter} variant="contained" sx={buttonStyle}>Filter</Button>
        </div>
            
        </>
    )
}

export const UsernameFilter = ()=>{
    const [state, setState] = useState("")

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleFilter = ()=>{
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
        
        if (!state) {
            current.delete("username");
        } else {
            current.set("username", state);
        }
        
        const search = current.toString();
        const query = search ? `?${search}` : "";
    
        router.push(`${pathname}${query}`);

    }

    const handleReset = ()=>{
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
        
        current.delete("username");

        const search = current.toString();
        const query = search ? `?${search}` : "";
    
        router.push(`${pathname}${query}`);

        setState("")
    }

    useEffect(()=>{
        const username = decodeURIComponent(searchParams.get("username") || '')
        setState(username)
    },[])

    return (
        <>
        <TextField inputSx={inputStyle}
            placeholder="User" 
            label="Username"
            value={state}
            onChange={(e)=>setState(e.target.value)}
        />
        <div className={styles['filter-button-group']}>
            <Button onClick={handleReset} sx={buttonStyle}>Reset</Button>
            <Button onClick={handleFilter} variant="contained" sx={buttonStyle}>Filter</Button>
        </div>
        </>
    )
}

export const EmailFilter = ()=>{
    const [state, setState] = useState("")

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleFilter = ()=>{
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
        
        if (!state) {
            current.delete("email");
        } else {
            current.set("email", state);
        }
        
        const search = current.toString();
        const query = search ? `?${search}` : "";
    
        router.push(`${pathname}${query}`);

    }

    const handleReset = ()=>{
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
        
        current.delete("email");

        const search = current.toString();
        const query = search ? `?${search}` : "";
    
        router.push(`${pathname}${query}`);

        setState("")
    }

    useEffect(()=>{
        const email = decodeURIComponent(searchParams.get("email") || '')
        setState(email)
    },[])

    return (
        <>
        <TextField inputSx={inputStyle}
            placeholder="Email" 
            label="Email"
            value={state}
            onChange={(e)=>setState(e.target.value)}
        />
         <div className={styles['filter-button-group']}>
            <Button onClick={handleReset} sx={buttonStyle}>Reset</Button>
            <Button onClick={handleFilter} variant="contained" sx={buttonStyle}>Filter</Button>
        </div>   
        </>
    )
}

export const PhoneNumberFilter = ()=>{
    const [state, setState] = useState("")

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleFilter = ()=>{
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
        
        if (!state) {
            current.delete("phone");
        } else {
            current.set("phone", state);
        }
        
        const search = current.toString();
        const query = search ? `?${search}` : "";
    
        router.push(`${pathname}${query}`);

    }

    const handleReset = ()=>{
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
        
        current.delete("phone");

        const search = current.toString();
        const query = search ? `?${search}` : "";
    
        router.push(`${pathname}${query}`);

        setState("")
    }

    useEffect(()=>{
        const phoneNumber = decodeURIComponent(searchParams.get("phone") || '')
        setState(phoneNumber)
    },[])


    return (
        <>
        <TextField inputSx={inputStyle}
            placeholder="Phone Number" 
            label="Phone Number"
            type="tel"
            value={state}
            onChange={(e)=>setState(e.target.value)}
        />
         <div className={styles['filter-button-group']}>
            <Button onClick={handleReset} sx={buttonStyle}>Reset</Button>
            <Button onClick={handleFilter} variant="contained" sx={buttonStyle}>Filter</Button>
        </div>   
        </>
    )
}

export const DateJoinedFilter = ()=>{
    const [state, setState] = useState("")

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleFilter = ()=>{
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
        
        if (!state) {
            current.delete("date");
        } else {
            current.set("date", state);
        }
        
        const search = current.toString();
        const query = search ? `?${search}` : "";
    
        router.push(`${pathname}${query}`);

    }

    const handleReset = ()=>{
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
        
        current.delete("date");

        const search = current.toString();
        const query = search ? `?${search}` : "";
    
        router.push(`${pathname}${query}`);

        setState("")
    }

    useEffect(()=>{
        const date = decodeURIComponent(searchParams.get("date") || '')
        setState(date)
    },[])

    return (
        <>
        <DateField 
            label="Date"
            placeholder="Date"
            inputSx={inputStyle}
            value={state}
            onChange={(e)=>setState(e.target.value)}/>
         <div className={styles['filter-button-group']}>
            <Button onClick={handleReset} sx={buttonStyle}>Reset</Button>
            <Button onClick={handleFilter} variant="contained" sx={buttonStyle}>Filter</Button>
        </div>   
        </>
    )
}

export const StatusFilter = ()=>{
    const [state, setState] = useState("")

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleFilter = ()=>{
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
        
        if (!state) {
            current.delete("status");
        } else {
            current.set("status", state);
        }
        
        const search = current.toString();
        const query = search ? `?${search}` : "";
    
        router.push(`${pathname}${query}`);

    }

    const handleReset = ()=>{
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
        
        current.delete("status");

        const search = current.toString();
        const query = search ? `?${search}` : "";
    
        router.push(`${pathname}${query}`);

        setState("")
    }

    const options = [
        {label:"Blacklisted", value:'blacklisted'},
        {label:"Active", value:'active'},
        {label:"Inactive", value:'inactive'},
        {label:"Pending", value:'pending'}
    ]

    useEffect(()=>{
        const status = decodeURIComponent(searchParams.get("status") || '')
        setState(status)
    },[])

    return (
        <>
        <Select inputSx={inputStyle}
            placeholder="Status" 
            label="Status"
            value={state}
            data={options}
            onChange={(e)=>setState(e.target.value)}
        />
           <div className={styles['filter-button-group']}>
            <Button onClick={handleReset} sx={buttonStyle}>Reset</Button>
            <Button onClick={handleFilter} variant="contained" sx={buttonStyle}>Filter</Button>
        </div> 
        </>
    )
}