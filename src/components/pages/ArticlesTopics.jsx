import { useParams } from "react-router-dom";
import { ArticleList } from "../ArticleList";
import { Typography } from "@mui/material";



export const ArticlesTopics = () => {
    const { topic } = useParams();
    return (
        <>
        <Typography variant="h4" mt={4} textAlign="center">
            Articles about {topic}...
        </Typography>
        <ArticleList topic={topic}/>
        </>
    )
}