import SearchIcon from './search'
import BellIcon from './bell'
import BadgePercentIcon from './badge-percent'
import BankIcon from './bank'
import BriefcaseIcon from './briefcase'
import ChartBarIcon from './chart-bar'
import ChevronDownIcon from './chevron-down'
import ClipboardListIcon from './clipboard-list'
import DropDownIcon from './dropdown'
import GalaxyIcon from './galaxy'
import HandshakeIcon from './handshake'
import HomeIcon from './home'
import PiggyBankIcon from './piggy-bank'
import SackHandIcon from './sack-hand'
import SackIcon from './sack'
import ScrollIcon from './scroll'
import SlidersIcon from './sliders'
import TransactionsIcon from './transaction'
import UserCheckIcon from './user-check'
import UserCogIcon from './user-cog'
import UserFriendIcon from './user-friend'
import UserTimesIcon from './user-times'
import UsersIcon from './users'
import CoinSolidIcon from './coins-solid'
import TyreIcon from './tyre'
import LogoutIcon from './logout'
import UsersOutlineIcon from './users-outline'
import UserGroupOutlineIcon from './user-group-outline'
import LoanOutlineIcon from './loan-outline'
import CoinOutlineIcon from './coin-outline'
import FilterIcon from './filter'
import MoreVerticalIcon from './more-vertical'
import BlacklistUserIcon from './blacklist'
import EyeIcon from './eye'
import ActivateUserIcon from './activate-user'
import ArrowLeftIcon from './arrow-left'
import FilledStarsIcon from './filled-stars'
import UnfilledStarsIcon from './unfilled-stars'

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