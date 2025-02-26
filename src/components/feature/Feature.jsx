import React from 'react'
import './Feature.css';

const Feature = ({title, text}) => {
  return (
    <div className='gpt3__features-container__feature'>
      <div class="gpt3__features-container__feature-title">
        <div></div>
        <h1>{title}</h1>
      </div>
      <div class="gpt3__features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature