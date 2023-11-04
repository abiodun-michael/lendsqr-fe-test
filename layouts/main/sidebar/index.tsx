'use client'

import { Menu, MenuGroup, MenuItem } from '../menu'
import { LogoutMenuItem } from '../menu/MenuItem'
import styles from './Sidebar.module.scss'


const Sidebar = ()=>{

    return(
        <aside className={styles.sidebar}>
            <Menu>
                <MenuItem icon="briefcase" label='Switch Organization'  dropdownItem={<></>}
                sx={{marginTop:39, marginBottom:52}}/>
                <MenuItem icon="home" label='Dashboard'/>
            </Menu>
            <MenuGroup title='Customers'>
                <Menu>
                    <MenuItem icon="user-friend" label='Users' target='/customers/users'/>
                    <MenuItem icon="user" label='Guarantors'/>
                    <MenuItem icon="sack" label='Loans'/>
                    <MenuItem icon="handshake" label='Decision Models'/>
                    <MenuItem icon="piggy-bank" label='Savings'/>
                    <MenuItem icon="sack-hand" label='Loan Requests'/>
                    <MenuItem icon="user-check" label='Whitelist'/>
                    <MenuItem icon="user-times" label='Karma'/>
                </Menu>
            </MenuGroup>
            <MenuGroup title='Businesses'>
                <Menu>
                    <MenuItem icon="briefcase" label='Organization'/>
                    <MenuItem icon="sack-hand" label='Loan Products'/>
                    <MenuItem icon="bank" label='Savings Products'/>
                    <MenuItem icon="coin-solid" label='Fees and Charges'/>
                    <MenuItem icon="transaction" label='Transactions'/>
                    <MenuItem icon="galaxy" label='Services'/>
                    <MenuItem icon="user-cog" label='Service Account'/>
                    <MenuItem icon="scroll" label='Settlements'/>
                    <MenuItem icon="chart-bar" label='Reports'/>
                </Menu>
            </MenuGroup>
            <MenuGroup title='Settings'>
                <Menu>
                    <MenuItem icon="sliders" label='Preferences'/>
                    <MenuItem icon="badge-percent" label='Fees and Pricing'/>
                    <MenuItem icon="clipboard-list" label='Audit Logs'/>
                    <MenuItem icon="tyre" label='Systems Messages'/>
                
                </Menu>
            </MenuGroup>
            <LogoutMenuItem />
        </aside>
    )
}

export default Sidebar