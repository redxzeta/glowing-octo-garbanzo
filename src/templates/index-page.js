import React from "react";
// import PropTypes from "prop-types";
// import { Link, graphql } from "gatsby";
// import ProLogo from "../img/proLogo.png";
import Layout from "../components/Layout";
// import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = () => (
  <div>
    <h2>Blogs</h2>
    <BlogRoll />
  </div>
);

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  );
};

export default IndexPage;
