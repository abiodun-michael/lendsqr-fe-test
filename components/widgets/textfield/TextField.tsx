'use client'

import React, { ComponentProps, useId, useState } from 'react'
import styles from './Input.module.scss'

type TextFieldProps = ComponentProps<'input'> & {
    label?:string,
    sx?: React.CSSProperties,
    marginTop?:string,
    marginBottom?:string,
    marginRight?:string,
    marginLeft?:string,
    inputSx?:React.CSSProperties
}

const TextField:React.FC<TextFieldProps> = ({label,sx,inputSx,type="text",
        marginBottom,marginLeft,marginTop,marginRight,
    ...rest})=>{
        const [hidePassword, setHidePassword] = useState(true)

        const inputType = type === 'password' && hidePassword ? 'password': type === 'password' && !hidePassword ? 'text': type

        const id = useId()

    return(
        <div className={styles['input-wrapper']} 
            style={{marginBottom,marginLeft,marginTop,marginRight,...sx}}>
            {label && <label className={styles.label} htmlFor={`textfield-${id}`}>{label}</label>}
            <input type={inputType}  id={`textfield-${id}`} className={styles['input-field']} style={inputSx} {...rest}/>
            {type === 'password' && <span className={styles['password-toggle']} onClick={()=>setHidePassword(!hidePassword)}>{hidePassword ? 'SHOW':'HIDE'}</span>}
        </div>
    )
}

export default TextField