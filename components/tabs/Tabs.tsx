import React, {memo, useEffect, useState } from 'react'
import styles from './Tabs.module.scss'

type IconType = {
    name:string,
    width?:string | number,
    height?:string | number
}
type TabItemType = {
    icon?:IconType,
    label:string,
    tabKey:string
}

type TabsProps = {
    list:TabItemType[],
    onChange?: (e:string)=>void,
    sx?:React.CSSProperties,
    defaultActiveTab?:string
}

const Tabs:React.FC<TabsProps> = ({sx,list=[], defaultActiveTab="", onChange=()=>{}})=>{
    const [tab, setTab] = useState<string>("")

    useEffect(()=>{
        onChange(tab)
    },[tab])

    const handleOnChange = (value:string)=>{
        setTab(value)
    }

    useEffect(()=>{
        setTab(defaultActiveTab)
    },[defaultActiveTab])

    return(
        <ul className={styles['tabs']} style={sx}>
            {
                list?.map(({label, tabKey})=>(
                    <li onClick={()=>handleOnChange(tabKey)} className={`${styles['tab-item']} ${tab === tabKey ? styles.active:''}`} key={tabKey}>{label}</li>
                ))
            }
        </ul>
    )
}

export default memo(Tabs)