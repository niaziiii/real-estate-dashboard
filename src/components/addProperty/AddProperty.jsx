import React from 'react'
import "./addProperty.scss";
import Basic from './components/Basic';
import Ordainary from './components/Ordainary';

const AddProperty = () => {
    return (
        <div className='addProperty'>
            <div className="addProperty__basic"><Basic /></div>
            <div className="addProperty__ordainary"><Ordainary /></div>
        </div>
    )
}

export default AddProperty
