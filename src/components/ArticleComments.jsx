import { getCommentsByArticleId } from "../api-functions/getCommentsByArticleId"
import { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import * as React from 'react';
import { Divider, IconButton, Paper, Typography } from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';

export const ArticleComments = ({article_id}) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [state, setState] = useState({
        comments: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
          sx={{ width: {xs: 250, sm: 350, md: 500}}}
          role="article"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {comments.map(comment=> {
                return (
                    <Paper key={comment.comment_id} sx={{width: "80%", mr: "auto", ml: "auto", p: 1, mb: 2, mt: 2}}>
                    <Typography gutterBottom variant="h6">{comment.author}</Typography>
                    <Typography gutterBottom variant="body2">{comment.body}</Typography>
                    <Typography gutterBottom variant="subtitle2">Created {comment.created_at.split("T")[0]}</Typography>
                    </Paper>
                )
            })}
            
          </List>
        </Box>
      );    

    useEffect(() => {
        getCommentsByArticleId(article_id).then(({data}) => {
            setComments(data.comments);
            setIsLoading(false);
        })

    },[])

    if(isLoading){
        return (
            <h1 className="loading-header">Loading...</h1>
        )
    }

    return (
          <React.Fragment>
            <IconButton onClick={toggleDrawer("comments", true)}>
                <CommentIcon  sx={{fontSize: "30px", mt: 1}}/>
            </IconButton>
            <Drawer
              anchor={"comments"}
              open={state["comments"]}
              onClose={toggleDrawer("comments", false)}
            >
              {list("comments")}
            </Drawer>
          </React.Fragment>
    )
}