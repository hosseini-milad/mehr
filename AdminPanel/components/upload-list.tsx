<<<<<<< HEAD
import React from 'react';
import {Box} from '@admin-bro/design-system'
import {BasePropertyProps} from 'admin-bro'

const Edit: React.FC<BasePropertyProps> = (props)=>{
    const {record} = props;
    const srcImg=record.params['imageUrl']
    
    return(
        <Box>
            {srcImg?(
                <img src={srcImg} style={{height:"65px"}} />
            ):'no image'}
        </Box>
    )
}
=======
import React from 'react';
import {Box} from '@admin-bro/design-system'
import {BasePropertyProps} from 'admin-bro'

const Edit: React.FC<BasePropertyProps> = (props)=>{
    const {record} = props;
    const srcImg=record.params['imageUrl']
    
    return(
        <Box>
            {srcImg?(
                <img src={srcImg} style={{height:"65px"}} />
            ):'no image'}
        </Box>
    )
}
>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
export default Edit