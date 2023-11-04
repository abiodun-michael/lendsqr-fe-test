'use client'

import { ComponentProps, useRef, useState, useEffect } from "react";
import { TextField } from ".."
import styles from './Date.module.scss'
import Calendar from 'react-calendar';
import { CSSTransition } from 'react-transition-group';

type Props = ComponentProps<'input'> & {
    inputSx?:React.CSSProperties,
    label?:string
}

const DateField = ({inputSx,label,...rest}:Props)=>{
        return(
            <div className={styles['date-field-wrapper']}>
                <TextField type="date" label={label} inputSx={inputSx} {...rest}/>
            </div>
        )

}

export default DateField