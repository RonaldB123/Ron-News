import axios from "axios"

export const getArticles = () => {
    return axios.get("https://ron-news.onrender.com/api/articles")
}