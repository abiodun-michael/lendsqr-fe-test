import { ComponentProps } from 'react'
import styles from './Login.module.scss'

type LayoutProps = ComponentProps<"div">


const LoginLayout = ({children}:LayoutProps)=>{


    return(
        <main className={styles.main}>
            <div className={styles['banner-container']}>
                <img className={styles['logo']} src='/logo.svg'/>
                <img className={styles['banner-image' ]}src='/pablo.png'/>
            </div>
            <div className={styles['form-container']}>
               <h1 className={styles['title']}>Welcome!</h1>
               <p className={styles['sub-text']}>Enter details to login.</p>
               {children}
            </div>
        </main>
    )
}

export default LoginLayout