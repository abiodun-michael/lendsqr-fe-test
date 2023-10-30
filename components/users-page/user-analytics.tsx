import AnalyticsCard, { AnalyticsCardGroup } from "../analytics-card"

interface IAnalytics {
    id:number,
    label:string,
    icon:string,
    data:number,
    bg:string
}

export const UserAnalytics = ()=>{

    const data:IAnalytics[] = [
        {
            id:1,
            label:"Users",
            icon:'users-outline',
            data:2453,
            bg:'rgba(223, 24, 255, 0.1)'
        },
        {
            id:2,
            label:"Active Users",
            icon:'user-group-outline',
            data:2453,
            bg:'rgba(87, 24, 255, 0.1)'
        },
        {
            id:3,
            label:"Users with Loans",
            icon:'loan-outline',
            data:12453,
            bg:'rgba(245, 95, 68, 0.1)'
        },
        {
            id:4,
            label:"Users with Savings",
            icon:'coin-outline',
            data:102453,
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