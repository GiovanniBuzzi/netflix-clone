import React from 'react'

import './itemFeatures.css'

const ItemFeatures = ({item,position}) => {
    return(
        <div className='itemFeaturesBox' style={{top:position}}>
            <div className='contentBox'>
            </div>
        </div>
    )
}

export default ItemFeatures;