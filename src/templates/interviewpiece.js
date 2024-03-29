/* import _ from 'lodash'
import React from 'react'
import Layout from '../components/piecelayout'
import Piecepreviewrow from '../components/piecepreviewrow'
import Shorten from '../components/shorten'
import Circlebutton from '../components/circlebutton'
import SEO from '../components/seo'
import Email from '../images/email.png'
import Facebook from '../images/facebook.png'
import Twitter from '../images/twitter.png'
import { Location } from '@reach/router';
import Navbar from '../components/sidenav'


export default function Template({ data }) {
  const post = data.markdownRemark
  const recommendedSample = _.sampleSize(data.all.edges, 3)

  return (
    <Layout>
    <SEO title={post.frontmatter.title} />

    <Navbar></Navbar>

    <div class="backHome">
      <a href="/">
        <small> ← Back to home</small>
      </a>
    </div>
    <div class="pieceBox">

      <div class="pieceInfo">
        <div class="stickyInfo">
          <div class="title">
            <h2>{post.frontmatter.title}</h2>
            <small>
                {post.frontmatter.type} by {post.frontmatter.author}
            </small>
          </div>
          <img alt="piece icon" class="pieceIcon" src={post.frontmatter.source.childImageSharp.sizes.src}></img>
          <div class="sharePiece">
            <div class="shareCall">
              <small>
                  Share this piece
              </small>
            </div>
            <div class="shareButtons">
              <Location>
                {({ location }) => {
                  return <div><a href={'https://twitter.com/home?status=womens.theharvardadvocate.com' + location.pathname}><img alt="twitter logo" class="shareIcon" src={Twitter}></img></a>
                          <a href={'https://www.facebook.com/sharer/sharer.php?u=womens.theharvardadvocate.com' + location.pathname}><img alt="facebook logo" class="shareIcon" src={Facebook}></img></a>
                          <a href={"mailto:?&subject=Read " + post.frontmatter.title + "from the Women's Issue&body=womens.theharvardadvocate.com" + location.pathname}><img alt="email logo"class="shareIcon" src={Email}></img></a></div>
                }}
              </Location>
            </div>
          </div>
        </div>
      </div>
      <div class="pieceWriting">
        <div>
          <audio controls style={{display: post.frontmatter.sound === '' ? 'none' : 'block' }}>
            <source src={post.frontmatter.sound} type="audio/mp3"></source>
            Your browser does not support the audio element.
          </audio>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

      </div>
    </div>


    <div class="recommendedPieces">
      <small>See more pieces</small>
      <Piecepreviewrow>
        {recommendedSample.map(post => (
          <a href={post.node.frontmatter.path}>
            <div class="piecepreviewcolumn">
              <div key={post.node.id} class="piecepreview">
                  <div class="previewDefault">
                    <img class="previewImage" src={post.node.frontmatter.source.childImageSharp.sizes.src}></img>
                    <div class="previewInfo">
                      <h3>{post.node.frontmatter.title}</h3>
                      <small>
                        {post.node.frontmatter.type} by {post.node.frontmatter.author}
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
    </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query InterviewByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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
    }
    all: allMarkdownRemark {
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
          excerpt(pruneLength: 350)
        }
      }
    }
  }
`
 */