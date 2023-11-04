import Link from "next/link"
import { Button, TextField } from "../widgets"
import styles from './index.module.scss'


const LoginForm = ()=>{

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
            <Button sx={{marginTop:"30px"}} block variant="contained">LOGIN IN</Button>
        </div>
    )
}


export default LoginForm