import React, { useRef ,useEffect, useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import StyleInput from "../../../components/Button/Input"
import formtrans from "../../../translate/forms"
import tabletrans from "../../../translate/tables"
import StyleSelect from '../../../components/Button/AutoComplete';
import Modal from '../../../components/Button/Modal';
import env from '../../../env';

function AdvDetails(props){
    const editorRef = useRef(null);
    const content=props.content 
    const [error,setError] = useState({errorText:'',errorColor:"brown"})
    //console.log(content)
    return(
        <div className="serviceItem">
          <StyleInput title={formtrans.title[props.lang]} direction={props.direction} 
              defaultValue={content?content.title:''} class={"formInput"}
              action={(e)=>props.setCatChange(prevState => ({
                ...prevState,
                title:e
              }))}/>
              <StyleInput title={formtrans.learnCode[props.lang]} direction={props.direction} 
              disable={content?true:false}
              defaultValue={content?content.advCode:''} class={"formInput"}
              action={(e)=>props.setCatChange(prevState => ({
                ...prevState,
                advCode:e?e.replace( / /g, '_'):''
              }))}/>
              
              <StyleInput title={formtrans.link[props.lang]} direction={props.direction} 
              defaultValue={content?content.url:''} class={"formInput"}
              action={(e)=>props.setCatChange(prevState => ({
                ...prevState,
                url:e
              }))}/>
              <textarea placeholder={formtrans.abstract[props.lang]} 
              defaultValue={content?content.description:''}
              onChange={(e)=>props.setCatChange(prevState => ({
                ...prevState,
                description:e.target.value
              }))}/>
        </div>
    )
}
export default AdvDetails