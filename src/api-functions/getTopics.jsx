import axios from "axios"


export const getTopics = () => {
    return axios.get("https://ron-news.onrender.com/api/topics");
}