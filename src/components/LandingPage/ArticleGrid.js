import React from "react";
import {
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
} from "@material-ui/core";

export default function ArticleGrid({ classes }) {
  return (
    <div>
      <Typography className={classes.blogTitle} variant="h4" color="primary">
        Blog
      </Typography>
      <Grid container spacing={5}>
        <Grid item spacing={3} xs={12} sm={12} md={9}>
          <ArticleCard classes={classes} title="Wow" />
        </Grid>
        <Grid item spacing={3} xs={12} sm={12} md={3}>
          <ArticleCard classes={classes} title="small" />
        </Grid>{" "}
        <Grid item spacing={3} xs={12} sm={12} md={9}>
          <ArticleCard classes={classes} title="yeet" />
        </Grid>{" "}
        <Grid item spacing={3} xs={12} sm={12} md={9}>
          <ArticleCard classes={classes} title="banb" />
        </Grid>{" "}
        <Grid item spacing={3} xs={12} sm={12} md={9}>
          <ArticleCard classes={classes} title="lijo" />
        </Grid>
      </Grid>
    </div>
  );
}

const ArticleCard = ({ title, classes }) => {
  return (
    <Card className={classes.cardWidth}>
      <CardActionArea>
        <CardMedia
          className={classes.cardMedia}
          image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
