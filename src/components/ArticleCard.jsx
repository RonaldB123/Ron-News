import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

export const ArticleCard = ({data}) => {
    return (
        <Card sx={{ maxWidth: 345, mb: 5, minWidth: 345} }>
        <CardActionArea>
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
        </CardActionArea>
          <CardActions>
        <Button size="small"><Link to={`${data.article_id}`}><span id="learn-more">Learn More</span></Link></Button>
            </CardActions>
      </Card>
    )

}

 // <ul className="articleCard-list">
            //     {data.map(article => {
            //         return <Link key={article.article_id} to={`${article.article_id}`}>
            //         <li className="articleCard-item">
            //             <img className="articleCard-img" src={article.article_img_url}></img>
            //             <h3 className="articleCard-title" >{article.title}</h3>
            //         </li>
            //         </Link>
            //     })}
            // </ul>