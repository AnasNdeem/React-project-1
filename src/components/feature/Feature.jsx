import React from 'react';
import './Feature.css';
 const Feature = ({title, text})=> {
    return(
        <div className='gpt3__features-container__features' id='wgpt3' >
           <div className='gpt3__features-container__features-tittle'>
            <div />
            <h1>{title}</h1>
           </div>
           <div className='gpt3__features-container__features-text'>
            {text}
           </div>
        </div>
    )
 }
 export default Feature;