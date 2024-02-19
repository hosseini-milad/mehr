<<<<<<< HEAD
import React  from 'react';
import {DropZone, DropZoneProps,Label,Box} from '@admin-bro/design-system'
import {BasePropertyProps} from 'admin-bro'

const EditUpload: React.FC<BasePropertyProps> = (props)=>{
    const {property,record,onChange} = props;
    const handleDropZone:DropZoneProps['onChange']=(files)=>{
        onChange('imgGalleryUrl',files[0]?.name)
        console.log(property.name,files[0])
        //onChange(property.name,files[0])
        
    }
    return(
        <Box>
            <Label>{property.label}</Label>
            <div style={{display:"flex"}}>
                <DropZone onChange={handleDropZone}/>

                <DropZone onChange={handleDropZone}/>
                <DropZone onChange={handleDropZone}/>
                <DropZone onChange={handleDropZone}/>
            </div>
        </Box>
    )
}
=======
import React  from 'react';
import {DropZone, DropZoneProps,Label,Box} from '@admin-bro/design-system'
import {BasePropertyProps} from 'admin-bro'

const EditUpload: React.FC<BasePropertyProps> = (props)=>{
    const {property,record,onChange} = props;
    const handleDropZone:DropZoneProps['onChange']=(files)=>{
        onChange('imgGalleryUrl',files[0]?.name)
        console.log(property.name,files[0])
        //onChange(property.name,files[0])
        
    }
    return(
        <Box>
            <Label>{property.label}</Label>
            <div style={{display:"flex"}}>
                <DropZone onChange={handleDropZone}/>

                <DropZone onChange={handleDropZone}/>
                <DropZone onChange={handleDropZone}/>
                <DropZone onChange={handleDropZone}/>
            </div>
        </Box>
    )
}
>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
export default EditUpload