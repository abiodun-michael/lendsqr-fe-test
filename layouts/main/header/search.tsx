import { Button, TextField } from '@/components/widgets'
import styles from './header.module.scss'
import SearchIcon from '@/icons/search'

const Search = ()=>{

    return(
        <div className={styles["search-wrapper"]}>
            <TextField 
                inputSx={{
                    borderWidth:1,
                    opacity:0.7,
                    width:400,
                    borderRadius:8,
                    height:40,
                    borderTopRightRadius:0,
                    borderBottomRightRadius:0,
                    borderRight:0,
                    paddingLeft:20,
                    paddingRight:20
                }}
                placeholder='Search for anything'/>
                <Button variant='contained' sx={{
                    height:40,
                    width:56,
                    borderTopLeftRadius:0,
                    borderBottomLeftRadius:0,
                    borderLeft:0,
                    color:'white',
                    padding:0
                }}><SearchIcon /></Button>
        </div>
    )
}

export default Search