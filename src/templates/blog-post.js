import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Typography, makeStyles } from "@material-ui/core";
import Share from "../components/Share";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",

    letterSpacing: "1px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    paragraph: {
      paddingTop: "5rem",

      // lineHeight: "1.5px",
    },
  },
  section: {
    marginTop: "5rem",
    img: { maxWidth: "100%" },
  },
}));
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;
  const classes = useStyles();
  return (
    <section className={classes.section}>
      {helmet || ""}

      <Typography variant="h1" className={classes.title}>
        {title}
      </Typography>
      <br />
      <br />
      <Typography variant="body1" className={classes.paragraph}>
        {description}
      </Typography>
      <PostContent content={content} className="blog" />
      {tags && tags.length ? (
        <div style={{ marginTop: `4rem` }}>
          <h4>Tags</h4>
          <ul className="taglist">
            {tags.map((tag) => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
      <Share
        title={post.frontmatter.title}
        url={`proauthenticity.com${post.fields.slug}`}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
