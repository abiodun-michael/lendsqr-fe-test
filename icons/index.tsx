import SearchIcon from './Search'
import BellIcon from './Bell'
import BadgePercentIcon from './BadgePercent'
import BankIcon from './Bank'
import BriefcaseIcon from './Briefcase'
import ChartBarIcon from './ChartBar'
import ChevronDownIcon from './Chevrondown'
import ClipboardListIcon from './ClipboardList'
import DropDownIcon from './Dropdown'
import GalaxyIcon from './Galaxy'
import HandshakeIcon from './Handshake'
import HomeIcon from './Home'
import PiggyBankIcon from './PiggyBank'
import SackHandIcon from './SackHand'
import SackIcon from './Sack'
import ScrollIcon from './Scroll'
import SlidersIcon from './Sliders'
import TransactionsIcon from './Transactions'
import UserCheckIcon from './UserCheck'
import UserCogIcon from './UserCog'
import UserFriendIcon from './UserFriend'
import UserTimesIcon from './UserTimes'
import UsersIcon from './Users'
import CoinSolidIcon from './CoinsSolid'
import TyreIcon from './Tyre'
import LogoutIcon from './Logout'
import UsersOutlineIcon from './UserOutline'
import UserGroupOutlineIcon from './UserGroupOutline'
import LoanOutlineIcon from './LoanOutline'
import CoinOutlineIcon from './CoinOutline'
import FilterIcon from './Filter'
import MoreVerticalIcon from './MoreVertical'
import BlacklistUserIcon from './Blacklist'
import EyeIcon from './Eye'
import ActivateUserIcon from './ActivateUser'
import ArrowLeftIcon from './ArrowLeft'
import FilledStarsIcon from './FilledStar'
import UnfilledStarsIcon from './UnfilledStar'

type Props = {
    name:string,
    width?:string,
    height?:string,
    onClick?: ()=>void
}
const Icon = (props:Props)=>{

    const {name, ...rest} = props
    
        switch(name){
            case "search":
                return <SearchIcon {...rest}/>
                break;
            case "bell":
                return <BellIcon {...rest}/>
                break;
            case "badge-percent":
                return <BadgePercentIcon {...rest}/>
                break;
            case "bank":
                return <BankIcon {...rest}/>
                break;
            case "briefcase":
                return <BriefcaseIcon {...rest}/>
                break;
            case "chart-bar":
                return <ChartBarIcon {...rest}/>
                break;
            case "chevron-down":
                return <ChevronDownIcon {...rest}/>
                break;
            case "clipboard-list":
                return <ClipboardListIcon {...rest}/>
                break;
            case "dropdown":
                return <DropDownIcon {...rest}/>
                break;
            case "galaxy":
                return <GalaxyIcon {...rest}/>
                break;
            case "handshake":
                return <HandshakeIcon {...rest}/>
                break;
            case "home":
                return <HomeIcon {...rest}/>
                break;
            case "piggy-bank":
                return <PiggyBankIcon {...rest}/>
                break;
            case "sack-hand":
                return <SackHandIcon {...rest}/>
                break;
            case "sack":
                return <SackIcon {...rest}/>
                break;
            case "scroll":
                return <ScrollIcon {...rest}/>
                break;
            case "sliders":
                return <SlidersIcon {...rest}/>
                break;
            case "transaction":
                return <TransactionsIcon {...rest}/>
                break;
            case "user-check":
                return <UserCheckIcon {...rest}/>
                break;
            case "user-cog":
                return <UserCogIcon {...rest}/>
                break;
            case "user-friend":
                return <UserFriendIcon {...rest}/>
                break;
            case "user-times":
                return <UserTimesIcon {...rest}/>
                break;
            case "user":
                return <UsersIcon {...rest}/>
                break;
            case "coin-solid":
                return <CoinSolidIcon {...rest}/>
                break;
            case "tyre":
                return <TyreIcon {...rest}/>
                break;
            case "logout":
                return <LogoutIcon {...rest}/>
            case "users-outline":
                return <UsersOutlineIcon {...rest}/>
                break;
            case 'user-group-outline':
                return <UserGroupOutlineIcon {...rest}/>
                break;
            case 'loan-outline':
                return <LoanOutlineIcon {...rest}/>
                break;
            case 'coin-outline':
                return <CoinOutlineIcon {...rest}/>
                break;
            case "filter":
                return <FilterIcon {...rest}/>
            case 'more-vertical':
                return <MoreVerticalIcon {...rest}/>
                break;
            case 'eye':
                return <EyeIcon {...rest}/>
                break;
            case 'blacklist':
                return <BlacklistUserIcon {...rest}/>
                break;
            case 'activate-user':
                return <ActivateUserIcon {...rest}/>
                break;
            case 'arrow-left':
                return <ArrowLeftIcon {...rest}/>
                break;
            case 'filled-star':
                return<FilledStarsIcon {...rest}/>
                break;
            case 'unfilled-star':
                return <UnfilledStarsIcon {...rest}/>
                break;
            default:
                return ""
        }
}



export default Icon