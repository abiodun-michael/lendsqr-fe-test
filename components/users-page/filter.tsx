'use client'

import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Button, TextField } from "../widgets"
import styles from './user-page.module.scss'
import { useState } from "react"
import DateField from "../widgets/date/Index"
import Select from "../widgets/select"

const inputStyle = {height:40, borderRadius:8,outline:0, borderWidth:1}
const buttonStyle = {width:98, height:40, borderRadius:8}



export const OrganizationFilter = ()=>{
    const [state, setState] = useState("")

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


    return (
        <>
        <Select 
            inputSx={inputStyle}
            placeholder="Organization" 
            label="Organization"
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
    return (
        <>
        <TextField inputSx={inputStyle}
            placeholder="Date" 
            label="Date"
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

    return (
        <>
        <TextField inputSx={inputStyle}
            placeholder="Status" 
            label="Status"
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