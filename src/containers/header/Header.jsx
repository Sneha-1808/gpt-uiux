import React from 'react'
import people from '../../assets/Group 81.png'
import ai from '../../assets/Illustration.png'
import './Header.css'
import '../../index.css';
import '../../App.css';

const Header = () => {
  return (
    <div className='gpt3__header section__padding '>
      <div class="gpt3__header-content">
        <h1 className='' >Let's Build Something amazing with GPT-3 OpenAI </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div class="gpt3__header-content__input">
          <input type="email" placeholder='Your Email Address'/>
          <button>Get Started</button>

        </div>
        <div class="gpt3__header-content__people">
          <img src={people} alt="people"/>
          <p>1,600 people requested access</p>
        </div>

        
      </div>
      <div class="gpt3__header-image">
          <img src={ai} alt="ai"/>
        </div> 
    </div>
  )
}

export default Header