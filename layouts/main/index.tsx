import Sidebar from "./sidebar"
import styles from './Main.module.scss'
import Header from "./header"

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

    return(
      <div className={styles['page-container']}>
        <p className={styles["page-container-title"]}>{title}</p>
        {children}
      </div>
    )
}