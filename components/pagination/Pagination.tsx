import React from 'react'
import styles from './Pagination.module.scss'
import Icon from '@/icons'

type PaginationProps = {
    numberOfItems:number,
    numberPerPage:number,
    currentPage?:number,
    onChangePage:(e:number)=>void,
    onChange:React.ChangeEventHandler<HTMLSelectElement>
}
const Pagination:React.FC<PaginationProps> = ({numberOfItems=0,onChangePage=()=>{}, numberPerPage,currentPage = 1, onChange})=>{

    const numberOfPages = Math.ceil(numberOfItems / numberPerPage)

    const handleNext = (page:number)=>{
        if(currentPage < page && currentPage < numberOfItems){
            onChangePage(page)
        }
    }

    const handlePrevious = (page:number)=>{
        if(currentPage > page){
            onChangePage(page)
        }
    }

    return(
        <div className={styles.pagination}>
            <div className={styles['pagination-showing-list']}>
                <span>Showing</span>
                <select value={numberPerPage} onChange={onChange}>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                </select>
                <span>out of {numberOfItems}</span>
            </div>
            <ul className={styles['pagination-page-list']}>
                <Icon onClick={()=>handlePrevious(currentPage - 1)} name="chevron-left" width='24px' height='24px'/>
                {
                   [...new Array(numberOfPages).keys()].map((item)=>(
                        <li key={item}>{item + 1}</li>
                    ))
                }
                <Icon onClick={()=>handleNext(currentPage + 1)} name='chevron-right' width='24px' height='24px'/>
            </ul>
        </div>
    )
}

export default Pagination