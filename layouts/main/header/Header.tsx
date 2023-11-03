import styles from './Header.module.scss'
import Navigation from './Navigation'
import Search from './Search'


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