'use client'

import { PropsWithChildren, useRef, useState, useEffect } from 'react'
import styles from './Table.module.scss'
import Icon from '@/icons'
import Card from '../card/Card'
import { CSSTransition } from 'react-transition-group';


interface Props extends PropsWithChildren<{}>{
    sx?:React.CSSProperties,
    renderFilter?:React.ReactNode,
    width?:string
}

const Th:React.FC<Props> = ({children,sx, width=0,renderFilter})=>{
    const [openModal, setOpenModal] = useState(false)

    const ref = useRef<HTMLDivElement>(null)

    const cardStyle = {
        border: "1px solid rgba(84, 95, 125, 0.14)",
        padding:20,
        boxShadow: "3px 5px 20px 0px rgba(0, 0, 0, 0.04)"
    }

    useEffect(() => {
        const handleClickOutside = (event: { target: any }) => {
          if (ref.current && !ref.current.contains(event.target)) {
            setOpenModal(false);
          }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
      }, []);

    return(
        <div className={styles.th} style={{...sx,minWidth:width}}>
            <div className={styles['th-inner']}>
            {children} {renderFilter && <Icon onClick={()=>setOpenModal(!openModal)} name='filter' width='16px' height='16px'/>}
            </div>
            <CSSTransition
                nodeRef={ref}
                in={openModal}
                timeout={300}
                classNames="tbl"
                onExited={()=>setOpenModal(false)}
                unmountOnExit>
                <div ref={ref} className={styles.filter}>
                    <Card sx={cardStyle}>
                        {renderFilter}
                    </Card>
                </div>
            </CSSTransition>
        </div>
    )
}


export default Th