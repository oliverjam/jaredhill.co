import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Container from '../components/Container';
import Title from '../components/Title';
import HomeSection from '../components/HomeSection';
import Footer from '../components/Footer';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = `${this.props.data.site.siteMetadata
      .title} | UX Designer`;
    const recentPosts = this.props.data.allMarkdownRemark.edges.slice(0, 3);
    return (
      <Container pt={[0, 0, 4]} pb={[4, 4, 5]}>
        <Helmet title={siteTitle} />
        <HomeSection />
        {/* <BlogSection
          label="Recent Posts"
          direction={['column', 'column', 'row']}
          posts={recentPosts}
          id="posts"
        /> */}
      </Container>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
