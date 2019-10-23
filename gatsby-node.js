const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`)

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getBlogs = makeRequest(graphql, `
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              parent {
                ... on File {
                  id
                  name
                }
              }
            }
          }
        }
      }
    `).then(result => {
      // Create pages for each article.
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/${node.parent.name}`, //use file name to set slug - solves problem of checking unique!
          component: path.resolve(`src/templates/blogPost.js`),
          context: {
            id: node.id,
          },
        })
      })
    });

  // Query for articles nodes to use in creating pages.
  return (
    getBlogs
  )
};

//Trying to convert strapi post content ot markdown type for transformer plugin
//if need to revert back for strapi markdown processing
exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {

  }
}
