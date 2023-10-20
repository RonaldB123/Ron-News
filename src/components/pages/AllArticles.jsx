import { Typography } from "@mui/material"
import { ArticleList } from "../ArticleList"

export const AllArticles = () => {
    return (
        <>
            <Typography variant="h4" sx={{textAlign: "center", mt: 4}}>
                Showing all articles...
            </Typography>
            <ArticleList/>
        </>
    )
 

}