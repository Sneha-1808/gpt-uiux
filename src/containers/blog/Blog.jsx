import React from 'react'
import Article from '../../components/article/Article'
import './Blog.css'
import blog01 from '../../assets/Rectangle 22-2.png';
import blog02 from '../../assets/Rectangle 22-3.png';
import blog03 from '../../assets/Rectangle 22-4.png';
import blog04 from '../../assets/Rectangle 26.png';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding'>
      <div class="gpt3__blog-heading">
        <h1>A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div class="gpt3__blog-container">
        <div class="gpt3__blog-container_groupA">
        <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div class="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog