import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Home from "./components/LandingPage/Home";
// import Hero from "./assets/hero-bg.png";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from "@material-ui/core";
import NavBar from "./components/layout/NavBar";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    height: "300px",
    // backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0.5)), url(${Hero})`,
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#000000",
    fontSize: "3rem",
    fontFamily: "Georgia",
    letterSpacing: "1.3rem",
    [theme.breakpoints.down("sm")]: {
      height: 200,
      fontSize: "3em",
      letterSpacing: ".7rem",
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    // fontFamily: "Georgia",
    // fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  cardWidth: {
    maxWidth: "100%",
  },
  cardMedia: {
    height: 240,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Home classes={classes} />
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <NavBar classes={classes} />
        <Typography className={classes.blogTitle} variant="h4" color="primary">
          Articles
        </Typography>

        <Grid container spacing={5}>
          <Grid item spacing={3} xs={12} sm={12} md={9}>
            <ArticleCard title="Wow" />
          </Grid>
          <Grid item spacing={3} xs={12} sm={12} md={3}>
            <ArticleCard title="small" />
          </Grid>{" "}
          <Grid item spacing={3} xs={12} sm={12} md={9}>
            <ArticleCard title="yeet" />
          </Grid>{" "}
          <Grid item spacing={3} xs={12} sm={12} md={9}>
            <ArticleCard title="banb" />
          </Grid>{" "}
          <Grid item spacing={3} xs={12} sm={12} md={9}>
            <ArticleCard title="lijo" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

const ArticleCard = ({ title }) => {
  const classes = useStyles();
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
