
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

function WaitBtn(props){
    const [wait,setWait] = useState(0)
    const waitTitle = props.waitTitle?props.waitTitle:"در حال ثبت"
    const action=()=>{
        if(wait) return
        setWait(1)
        if(props.onAction) props.onAction()
    }
    return(
        <button 
                className={props.class}
                disabled={props.disable?true:false}
                onClick={action}
                
            >{wait?waitTitle:props.title}</button>
    )
}
export default WaitBtn