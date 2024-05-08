import axios from 'axios';
import React,{useEffect, useState} from 'react';
import NewsBox from './NewsBox';


const NewsContainer =  () => {
    //api configuration
    const [article, setArticle] = useState([]);
    
    useEffect(() => {
      getArticles()
    }, [])

    console.log(article);

    const getArticles = async () => {
      const getArticles = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=d23034a1e92640a9989a65109fb3ae4c`)
      setArticle(getArticles.data.articles)
    }
    
  return (
    <div>
      <h1>sefs</h1>
      {article.map((data) => {
        return <NewsBox data={data} />
      })}
    </div>
  )
}

export default NewsContainer