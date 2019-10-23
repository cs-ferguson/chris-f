import React, { useLayout } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const BlogPostTemplate = ({ data }) => {

  return(
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query BlogPostTemplate($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
    }
  }
`
