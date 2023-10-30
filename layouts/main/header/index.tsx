import styles from './header.module.scss'
import Navigation from './navigation'
import Search from './search'


const Header = ()=>{

    return(
        <header className={styles.header}>
            <div className={styles["logo-wrapper"]}>
                <img src='/logo.svg' className={styles.logo}/>
                <Search />
            </div>
            <Navigation />
        </header>
    )
}

export default Header