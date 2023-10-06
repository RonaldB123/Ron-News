import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom'

export const ArticleCard = ({data}) => {
    return (
        <Link to={`${data.article_id}`}>
        <CardActionArea sx={{maxWidth: "fit-content", mr: "auto", ml: "auto"}}>
        <Card sx={{ maxWidth: 345 ,minWidth: 345, minHeight: 320, maxHeight: 320}}>
          <CardMedia
            component="img"
            height="140"
            image={data.article_img_url}
            //alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                By {data.author}
            </Typography>
          </CardContent>
      </Card>
        </CardActionArea>
        </Link>
    )

}
