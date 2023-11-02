import React,{memo} from "react"
import AnalyticsCard, { AnalyticsCardGroup } from "../analytics-card"
import { Users } from "@/utils/types"

interface IAnalytics {
    id:number,
    label:string,
    icon:string,
    data:number,
    bg:string
}

type Props = {
    users:Users[]
}

const UserAnalytics:React.FC<Props> = ({users})=>{

    const numberOfActiveUsers = users.filter(el=>el.profile.status === 'active').length
   
    const numberOfUserWithSavings = users.filter(el=>Number(el.bankInfo.balance) > 0).length
    const numberOfUserWithLoans = users.filter(el=>Number(el.employment.loan) > 0).length

    const data:IAnalytics[] = [
        {
            id:1,
            label:"Users",
            icon:'users-outline',
            data:users.length,
            bg:'rgba(223, 24, 255, 0.1)'
        },
        {
            id:2,
            label:"Active Users",
            icon:'user-group-outline',
            data:numberOfActiveUsers,
            bg:'rgba(87, 24, 255, 0.1)'
        },
        {
            id:3,
            label:"Users with Loans",
            icon:'loan-outline',
            data:numberOfUserWithLoans,
            bg:'rgba(245, 95, 68, 0.1)'
        },
        {
            id:4,
            label:"Users with Savings",
            icon:'coin-outline',
            data:numberOfUserWithSavings,
            bg:'rgba(255, 51, 102, 0.1)'
        }
]

    return(
        <AnalyticsCardGroup>
            {
                data?.map(({label,id,data,bg, icon})=>(
                    <AnalyticsCard label={label} data={data} bg={bg} icon={icon} key={id}/>
                ))
            }
        </AnalyticsCardGroup>
    )
}

export default memo(UserAnalytics)