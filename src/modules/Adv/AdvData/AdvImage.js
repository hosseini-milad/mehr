import { useEffect, useState } from "react";
import ImageSimple from "../../../components/Button/ImageSimple"
import env from "../../../env";
import tabletrans from "../../../translate/tables"
import UploadSimple from "../../../components/Button/uploadSimple";

function AdvImage(props){
    const [image,setImage]= useState();
    const [upload,setUpload]= useState();
    const [imageUrl,setImageUrl] = useState('')
    const [uploadUrl,setUploadUrl] = useState('')
    const content = props.content
    console.log(upload)
    useEffect(() => {
      const postOptions={
          method:'post',
          headers: {
              "content-type": "application/json"
          },
          body:JSON.stringify({base64image:image&&image.base64,
                              imgName:image&&image.fileName,
                            folderName:"adv"})
      }//URL.createObjectURL(image)
      //console.log(postOptions)
      image&&fetch(env.siteApi+"/panel/user/upload",postOptions)
          .then(res => res.json())
          .then(
          (result) => {
            props.setCatChange(prevState => ({
              ...prevState,
              imageUrl:result.url
            }))
          },
          (error) => {
              console.log(error);
          }
          )
          .catch((error)=>{
          console.log(error)
          })

      },[image])
      const resizeFile = (file) =>
    new Promise((resolve,reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });
    return( 
        <div className="images">
            <div className="images">
                <h5>{tabletrans.images[props.lang]}</h5>
                <ImageSimple cardName="Input Image" imageGallery={[]} 
                    setImage={setImage} setImageUrl={setImageUrl} part={1}/>
                <img src={props.catChange.imageUrl?env.siteApiUrl+props.catChange.imageUrl:
                  (content?(env.siteApiUrl+content.imageUrl):'')} 
                  alt={content?content.title:env.default}/>
            </div>
            
        </div>
    )
}
export default AdvImage