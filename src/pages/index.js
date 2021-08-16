import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I am making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Three girls sitting on a concrete elephant statue, none of them looking at the camera."
        src="../images/aaa.jpg"
      />
    </Layout>
  )
}

export default IndexPage
