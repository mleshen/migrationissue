import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'
import Piecepreviewrow from '../components/piecepreviewrow'
import Circlebutton from '../components/circlebutton'
import Shorten from '../components/shorten'
import SEO from '../components/seo'
import Navbar from '../components/sidenav'
import GenreBar from '../components/genrebar'
import Footer from '../components/footer'


export default ({data }) => {

return (
  <Layout>
    <SEO title="Interviews" keywords={[`interview, interviews`]} />

    <Navbar></Navbar>
    <GenreBar></GenreBar>

    <h4 class="top">Explore interviews</h4>
    <Piecepreviewrow>
      {data.interview.edges.map(post => (
        <a href={post.node.frontmatter.path}>
          <div class="piecepreviewcolumn">
            <div key={post.node.id} class="piecepreview poetrypreview">
                <div class="previewDefault">
                  <img class="previewImage" src={post.node.frontmatter.source.childImageSharp.sizes.src}></img>
                  <div class="previewInfo">
                    <h3>{post.node.frontmatter.title}</h3>
                    <small>
                      In conversation with {post.node.frontmatter.author}
                    </small>
                  </div>
                </div>

                <div class="previewOverlay">
                  <div class="overlayContent">
                    <h3>{post.node.frontmatter.title}</h3>
                    <small>
                      {post.node.frontmatter.type} by {post.node.frontmatter.author}
                    </small>
                    <Shorten>{post.node.excerpt}</Shorten><br />
                    <div class="fadetowhite"></div>
                    <Circlebutton> <small> Read more </small> </Circlebutton>
                  </div>
                </div>
            </div>
          </div>
        </a>
      ))}
    </Piecepreviewrow>

    <div class="linebreak" />
    <Footer />
  </Layout>
)
}

export const pieceQuery = graphql`
    query InterviewIndexQuery {
      interview: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/interviews/"}}) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              author
              type
              source {
                childImageSharp{
                  sizes(maxWidth: 630) {
                      src
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    }
`