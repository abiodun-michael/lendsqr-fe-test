'use client'

import Icon from '@/icons'
import styles from './popup.module.scss'
import { useRef, useState, useEffect, PropsWithChildren } from 'react'
import { CSSTransition } from 'react-transition-group'



type IconType = {
  name:string,
  width?: string,
  height?: string
}


type PopupProps = PropsWithChildren <any> & {
  icon:IconType,
  onOpen?:()=>void,
  onClose?:()=>void,
  width?:number | string,
  height?: number | string,
  sx?:React.CSSProperties,
  position?:string
}


const Popup:React.FC<PopupProps> = ({icon,width=180, height, sx,position='left', onOpen=()=>{}, onClose=()=>{}, children})=>{

    const [open, setOpen] = useState(false)

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: { target: any }) => {
          if (ref.current && !ref.current?.contains(event.target)) {
            setOpen(false);
          }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
      }, []);

      useEffect(()=>{
        if(open){
          onOpen()
        }else{
          onClose()
        }
      },[open])

      const popupPosition = position === 'left' ? {left:'-10px'}: position === 'right' ? {right:'-10px'}:{}

    return(
        <div className={styles.popup}>
            <span onClick={()=>setOpen(true)}><Icon name={icon.name} width={icon.width || 20} height={icon.height || 20}/></span>
            <CSSTransition
                nodeRef={ref}
                in={open}
                timeout={300}
                classNames="tbl"
                onExited={()=>setOpen(false)}
                unmountOnExit>
                 <div ref={ref} className={styles['popup-container']} style={{...sx, width, height, ...popupPosition}}>
                  {children}
                </div>
            </CSSTransition>
        </div>
    )
}

export default Popup