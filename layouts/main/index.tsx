'use client'

import Sidebar from "./sidebar"
import styles from './Main.module.scss'
import Header from "./header/Header"
import Icon from "@/icons"
import { useRouter } from "next/navigation"

type IndexProps = {children: React.ReactNode}
type PageContainerProps = {children: React.ReactNode, title?:string, isSubPage?:boolean}


const Index = ({
    children,
  }: IndexProps)=>{


    return(
        <>
            <Header />
            <main className={styles.main}>
                <Sidebar />
                <div className={styles.content}>
                  {children}
                </div>
            </main>
        </>
    )
}


export default Index



export const PageContainer = ({children, title, isSubPage}:PageContainerProps)=>{
  const router = useRouter()
    return(
      <div className={styles['page-container']}>
        {!isSubPage && <p className={styles["page-container-title"]}>{title}</p>}
        {isSubPage && <p className={styles["page-container-sub-title"]} onClick={()=>router.back()}>
          <Icon name="arrow-left" width="30px" height="30px"/>{title}</p>}
        {children}
      </div>
    )
}