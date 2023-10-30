'use client'

import { ComponentProps, useState } from 'react'
import styles from './input.module.scss'

type InputProps = ComponentProps<'input'> & {
    label?:string,
    sx?: React.CSSProperties,
    marginTop?:string,
    marginBottom?:string,
    marginRight?:string,
    marginLeft?:string,
    inputSx?:React.CSSProperties
}

const TextField = ({label,sx,inputSx,type="text",
        marginBottom,marginLeft,marginTop,marginRight,
    ...rest}:InputProps)=>{
        const [hidePassword, setHidePassword] = useState(true)

        const inputType = type === 'password' && hidePassword ? 'password': type === 'password' && !hidePassword ? 'text': type

    return(
        <div className={styles['input-wrapper']} 
            style={{marginBottom,marginLeft,marginTop,marginRight,...sx}}>
            <input type={inputType} className={styles['input-field']} style={inputSx} {...rest}/>
            {type === 'password' && <span className={styles['password-toggle']} onClick={()=>setHidePassword(!hidePassword)}>{hidePassword ? 'SHOW':'HIDE'}</span>}
        </div>
    )
}

export default TextField