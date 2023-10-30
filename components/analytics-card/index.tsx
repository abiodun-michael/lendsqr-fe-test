import Icon from "@/icons"
import Card from "../card"
import styles from './analytics-card.module.scss'

type AnalyticsCardProps = {
    bg:string,
    icon:string,
    label:string,
    data:number
}

const AnalyticsCard = ({bg,icon,label,data}:AnalyticsCardProps)=>{

    return(
        <Card sx={{width:"240px", height:"160px"}}>
            <div className={styles['analytic-card-container']}>
                <div className={styles['analytics-icon-wrapper']} style={{backgroundColor:bg}}>
                    <Icon name={icon}/>
                </div>
                <p className={styles['analytics-label']}>{label}</p>
                <p className={styles['analytics-data']}>{data}</p>
            </div>
        </Card>
    )
}

export default AnalyticsCard



export const AnalyticsCardGroup = ({children}:{children:React.ReactNode})=>(
    <div className={styles['analytic-card-group']}>{children}</div>
)