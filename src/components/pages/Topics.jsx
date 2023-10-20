import { Card, CardContent, Grid, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { getTopics } from "../../api-functions/getTopics"
import { Link } from "react-router-dom";

export const Topics = () => {
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTopics().then(({ data }) => {
            setLoading(false);
            setTopics(data.topics)
        }).catch((err) => {

        })

    }, [])

    if (loading) {
        return (
            <Typography textAlign="center">
                Loading...
            </Typography>
        )
    }

    return (
        <>
         <Typography variant="h4" gutterBottom mt={4} textAlign="center">
        Topics
      </Typography>
            <Grid container spacing={2}>
                {topics.map((topic) => (
                    <Grid item xs={12} sm={6} md={4} key={topic.slug} mt={1}>
                        <Link to={`/articles/topics/${topic.slug}`}>
                        <Card
                        sx={{
                            border: '1px solid #e0e0e0',
                            borderRadius: '5px',
                            transition: 'transform 0.2s',
                            '&:hover': {
                              transform: 'scale(1.02)',
                            },
                            height: '100%',
                          }}>
                            <CardContent>
                                <Typography variant="h6">{topic.slug}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {topic.description}
                                </Typography>
                            </CardContent>
                        </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}