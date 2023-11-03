import { ComponentProps, useEffect, useId, useRef, useState } from 'react'
import styles from './Select.module.scss'
import Icon from '@/icons'
import Card from '@/components/card/Card'
import { CSSTransition } from 'react-transition-group'


type Data = {
    value:string | number,
    label:string
}

type SelectProps = ComponentProps<"select"> & {
    inputSx?:React.CSSProperties,
    data: Data[],
    label?:string,
    sx?:React.CSSProperties
}

const Select:React.FC<SelectProps> = ({data,label,inputSx,placeholder,...rest})=>{

    const [open, setOpen] = useState(false)

    const ref = useRef(null)

    const id = useId()

    useEffect(()=>{
        
    },[])

    return(
        <div className={styles.select}>
            <div className={styles['input-wrapper']}>
                {label && <label className={styles.label} htmlFor={`textfield-${id}`}>{label}</label>}
                <select  id={`textfield-${id}`} className={styles['input-field']} style={inputSx} {...rest}>
                    <option value="" selected>{placeholder}</option>
                    {
                        data?.map(({value,label})=>(
                            <option key={value} value={value}>{label}</option>
                        ))
                    }
                </select>
            </div>
            <CSSTransition
                in={open}
                nodeRef={ref}
                timeout={300}
                classNames="tbl"
                onExited={()=>setOpen(false)}
                unmountOnExit>
                <div className={styles.dropdown}>
                    <Card>
                        <ul className={styles.list}>
                            <li className={styles.li}>Larry</li>
                            <li  className={styles.li}>Onome</li>
                        </ul>
                    </Card>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Select