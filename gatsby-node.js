const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulCluster {
        nodes {
          title
          organizations{
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulCluster.nodes.forEach(node => {
    createPage({
      path: node.title,
      component: path.resolve(`./src/templates/clusterpage.js`),
      context: {
        title: node.title,
      },
    })

    try {
      node.organizations.forEach((organization) => {
        createPage({
          path: `${organization.slug}`,
          component: path.resolve(`./src/templates/orgpage.js`),
          context: {
            slug: organization.slug,
          },
        })
      })
    } catch (error) {

    }


  });
}
