import axios from 'axios';
import React,{useEffect, useState} from 'react';


const NewsContainer = async () => {
    //api configuration
    const [article, setArticle] = useState([]);
    useEffect(() => {
      getArticles()
    }, [])

    const getArticles = async () => {
      const getArticles = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=d23034a1e92640a9989a65109fb3ae4c`)
      setArticle(getArticles.data.articles)
    }
    
  return (
    <div>
      <h1>sefs</h1>
    </div>
  )
}

export default NewsContainer