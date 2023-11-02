import { PropsWithChildren } from "react"
import Card from "../card"
import styles from './user-details-page.module.scss'
import { Users } from "@/utils/types"

const cardStyle = {
    padding:30,
    borderRadius: 4,
    border: "1px solid rgba(33, 63, 125, 0.06)",
    boxShadow: "3px 5px 20px 0px rgba(0, 0, 0, 0.04)"
}

type UserGeneralDetailsProps = {
    user:Users
}

const UserGeneralDetails:React.FC<UserGeneralDetailsProps> = ({user})=>{

    const personalInfo = [
        {
            label:'Full Name',
            value:user.profile.firstName+' '+user.profile.lastName
        },
        {
            label:'Phone Number',
            value:user.profile.phoneNumber
        },
        {
            label:'Email Address',
            value:user.profile.email
        },
        {
            label:"BVN",
            value:user.profile.bvn
        },
        {
            label:"Gender",
            value:user.profile.gender
        },
        {
            label:"Marital status",
            value:user.profile.maritalStatus
        },
        {
            label:"Children",
            value: user.profile.children || 'None'
        },
        {
            label:"Type of residence",
            value:user.profile.residentialType
        }
]

const educationAndEmploymentInfo = [
    {
        label:'level of education',
        value:user.levelOfEducation
    },
    {
        label:'employment status',
        value:user.employment.status
    },
    {
        label:'sector of employment',
        value:user.employment.sector
    },
    {
        label:"Duration of employment",
        value: user.employment.duration+'years'
    },
    {
        label:"office email",
        value:user.employment.officeEmailemail
    },
    {
        label:"Monthly income",
        value:'₦'+user.employment.salary
    },
    {
        label:"loan repayment",
        value:'₦'+user.employment.loan
    }
]

const socialsInfo = [
    {
        label:'Twitter',
        value:'@'+user.socials.twitter
    },
    {
        label:'Facebook',
        value:user.socials.facebook
    },
    {
        label:'Instagram',
        value:'@'+user.socials.instagram
    }
]

const guarantorInfo = [
    {
        label:'full Name',
        value:user.profile.firstName+' '+user.profile.lastName
    },
    {
        label:'Phone Number',
        value:user.profile.phoneNumber
    },
    {
        label:'Email Address',
        value:'@grace_effiom'
    },
    {
        label:"Relationship",
        value:"Sister"
    }
]

    return(
        <Card sx={cardStyle}>
            <GridLayout showDivider title="Personal Information" column={5} data={personalInfo}/>
            <GridLayout showDivider title="Education and Employment" column={4} data={educationAndEmploymentInfo}/>
            <GridLayout showDivider title="Socials" column={5} data={socialsInfo}/>
            <GridLayout title="Guarantor" column={5} data={guarantorInfo}/>
        </Card>
    )
}

export default UserGeneralDetails

type DataType = {
    label:string,
    value:string | number
}

type GridLayoutProps = {
    column:number,
    data: DataType[],
    title:string,
    showDivider?:boolean
}

const GridLayout:React.FC<GridLayoutProps> = ({title,column,showDivider,data=[]})=>{

    return(
        <>
        <section className={styles['general-detail-section']}>
            <p className={styles['general-detail-section-title']}>{title}</p>
           <div className={styles['general-detail-section-grid']} style={{gridTemplateColumns: `repeat(${column},1fr)`}}>
           {
            data?.map(({label, value},i)=>(
                <div className={styles['general-detail-section-grid-items']} key={i}>
                    <h5 className={styles['general-detail-section-grid-items-h5']}>{label}</h5>
                    <p className={styles['general-detail-section-grid-items-p']}>{value}</p>
                </div>
            ))
           }
           </div>
        </section>
        {showDivider && (<div className={styles['section-divider']}/>)}
        </>
    )
}
