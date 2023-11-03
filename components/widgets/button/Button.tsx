import { ComponentProps } from 'react'
import styles from './Button.module.scss'


type Variants = 'outlined'| 'contained'

type ButtonProps = ComponentProps<'button'> & {
    loading?:boolean,
    variant?:Variants,
    sx?: React.CSSProperties,
    block?: boolean,
    height?:string,
    width?:string,
    marginTop?:string,
    marginBottom?:string,
    marginRight?:string,
    marginLeft?:string

}

const Button = ({children, sx, 
    marginBottom,marginLeft,marginTop,marginRight,width, height, block, variant='outlined', loading,...rest}:ButtonProps)=>{


    return(
        <button 
            style={{ marginBottom,marginLeft,marginTop,marginRight, width: block ? '100%':width, height,...sx}}
            className={`${styles.button} ${styles[variant]}`} 
            {...rest}>
            {loading ? 'Loading...':children}
        </button>
    )
}

export default Button