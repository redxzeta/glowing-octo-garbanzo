import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import {
  Card,
  CardActionArea,
  Button,
  CardContent,
  Typography,
  CardActions,
  makeStyles,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardWidth: {
    maxWidth: "100%",
  },
  cardMedia: {
    height: 240,
  },
  // featuredPost: {
  //   backgroundColor: "rgba(22,50,150,0.5)",
  // },
}));
function BlogRoll(props) {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;
  const classes = useStyles();
  return (
    <Grid container spacing={5}>
      {posts &&
        posts.map(({ node: post }) => (
          <Grid item xs={12} md={6} key={post.id}>
            <ArticleCard
              title={post.frontmatter.title}
              classes={classes}
              description={post.frontmatter.description}
              image={post.frontmatter.featuredimage}
              link={post.fields.slug}
            ></ArticleCard>
          </Grid>
        ))}
    </Grid>
  );
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                description
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);

const ArticleCard = ({ title, classes, description, image, link }) => {
  return (
    <Card className={classes.cardWidth}>
      <CardActionArea className={classes.featuredPost}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {image ? (
              <div className="featured-thumbnail">
                <PreviewCompatibleImage
                  style={classes.cardMedia}
                  imageInfo={{
                    image: image,
                    alt: `featured image thumbnail for post `,
                  }}
                />
              </div>
            ) : null}{" "}
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button component={Link} to={link} size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};
