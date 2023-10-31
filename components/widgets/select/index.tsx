import { ComponentProps, useEffect, useId, useRef, useState } from 'react'
import styles from './Select.module.scss'
import Icon from '@/icons'
import Card from '@/components/card'
import { CSSTransition } from 'react-transition-group'


type Data = {
    value:string | number,
    label:string
}

type SelectProps = ComponentProps<"input"> & {
    inputSx?:React.CSSProperties,
    data: Data[],
    label?:string,
    sx?:React.CSSProperties
}

const Select:React.FC<SelectProps> = ({data,label,inputSx,...rest})=>{

    const [open, setOpen] = useState(false)

    const ref = useRef(null)

    const id = useId()

    useEffect(()=>{
        
    },[])

    return(
        <div className={styles.select}>
            <div className={styles['input-wrapper']}>
                {label && <label className={styles.label} htmlFor={`textfield-${id}`}>{label}</label>}
                <input type='text' readOnly  id={`textfield-${id}`} className={styles['input-field']} style={inputSx} {...rest}/>
                <div className={styles['dropdown-icon']}><Icon name='chevron-down' width='14px' height='14px' onClick={()=>setOpen(!open)}/></div>
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