import Icon from "@/icons"
import React from "react"


type StarProps = {
    count?: number,
    filled:number
}

const Stars:React.FC<StarProps> = ({count = 5, filled})=>{

    

    const filledStars = [...new Array(filled).keys()].map((i)=>(
        <Icon key={i} name="filled-star" width="16px" height="16px"/>
    ))

    const unfilledStars = [...new Array(count - filled).keys()].map((i)=>(
        <Icon key={i} name="unfilled-star" width="16px" height="16px"/>
    ))

    return(
        <div>
            {filledStars}
            {unfilledStars}
        </div>
    )
}

export default Stars