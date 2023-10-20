import axios from "axios"

export const getArticles = ({topic}) => {
    if(topic){
        return axios.get(`https://ron-news.onrender.com/api/articles?topic=${topic}`);
    }else{
        return axios.get("https://ron-news.onrender.com/api/articles")
    }
}