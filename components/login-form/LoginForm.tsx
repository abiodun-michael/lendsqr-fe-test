'use client'

import Link from "next/link"
import { Button, TextField } from "../widgets"
import styles from './index.module.scss'
import {useRouter} from 'next/navigation'


const LoginForm = ()=>{

    const router = useRouter()

    return(
        <div className={styles['login-form-container']}>
            <TextField 
                name="email"
                marginBottom="24px" 
                placeholder="Email"/>
            <TextField 
                name="password"
                type="password"
                marginBottom="24px" 
                placeholder="Password"/>
            <Link href="#">FORGOT PASSWORD?</Link>
            <Button onClick={()=>router.replace('/customers/users')} sx={{marginTop:"30px"}} block variant="contained">LOGIN IN</Button>
        </div>
    )
}


export default LoginForm