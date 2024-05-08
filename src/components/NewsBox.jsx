import React from 'react'
import './CSS/NewsBox.css';
const NewsBox = ({data}) => {
  return (
    <div className='card'>
        <h1>{data.title}</h1>
        <img src={data.urlToImage} alt={data.title} />
        <p>{data.description}</p>
        <a href={data.url} target='_blank' rel='noreferrer'>Read More</a>
    </div>
  )
}

export default NewsBox;