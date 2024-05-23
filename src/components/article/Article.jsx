import React from 'react'
import './Article.css'

const Article = ({imgUrl, date, text}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div class="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog_image"/>
      </div>
      <div class="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <p>{text}</p>
        </div>
        <p>Read full Article</p>
      </div>
    </div>
  )
}

export default Article