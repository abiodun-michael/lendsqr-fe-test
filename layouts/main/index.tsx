import Sidebar from "./sidebar"
import styles from './Main.module.scss'
import Header from "./header"


const Index = ({
    children,
  }: {
    children: React.ReactNode
  })=>{


    return(
        <>
            <Header />
            <main className={styles.main}>
                <Sidebar />
            </main>
        </>
    )
}


export default Index