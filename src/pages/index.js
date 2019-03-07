import React from 'react'
import _ from 'lodash'

import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Piecepreviewrow from '../components/piecepreviewrow'
import Circlebutton from '../components/circlebutton'
import Featuredcolumn from '../components/featuredcolumn'
import Shorten from '../components/shorten'
import Shortenfeatured from '../components/shortenfeatured'
import SEO from '../components/seo'
import Navbar from '../components/sidenav'
import GenreBar from '../components/genrebar'


class Index extends React.Component {

  state = {
    isLoaded: false,
    featuredSample:[],
    artSample:[],
    essaySample:[],
    fictionSample:[],
    poetrySample:[],
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
          isLoaded: true,
          featuredSample: _.sampleSize(this.props.data.all.edges, 3),
          artSample: _.sampleSize(this.props.data.art.edges, 4),
          essaySample: _.sampleSize(this.props.data.personalessay.edges, 3),
          fictionSample: _.sampleSize(this.props.data.fiction.edges, 3),
          poetrySample: _.sampleSize(this.props.data.poetry.edges, 3)
      })
    }, 300)
  }

  render() {
    const { isLoaded, test, featuredSample, artSample, essaySample, fictionSample, poetrySample } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Layout>
          <SEO title="Home" keywords={[`literary`, `art`, `magazine`]} />

          <Navbar></Navbar>

          <GenreBar></GenreBar>

          <h4 class="top">Featured</h4>
          <div class="featuredrow">
            {featuredSample.map(post => (
              <Featuredcolumn>
                <div key={post.node.id}>
                  <a href={post.node.frontmatter.path}>
                  <h3>{post.node.frontmatter.title}</h3>
                  <small>
                    {post.node.frontmatter.type} by {post.node.frontmatter.author}
                  </small>
                  <br />
                  </a>
                </div>
              </Featuredcolumn>
            ))
            }
          </div>

          <div class="featuredpiece">
              <div class="item-1" href={featuredSample[0].node.frontmatter.path}>
                <a class="featuredLink" href={featuredSample[0].node.frontmatter.path}>
                <img class="featuredImage" alt="first feature" src={featuredSample[0].node.frontmatter.source.childImageSharp.sizes.src}></img>
                  <div class="featuredInfo">
                    <h2>{featuredSample[0].node.frontmatter.title}</h2>
                    <small>
                      {featuredSample[0].node.frontmatter.type} by {featuredSample[0].node.frontmatter.author}
                    </small>
                    <Shortenfeatured>
                      {featuredSample[0].node.excerpt}
                    </Shortenfeatured>
                  </div>
                </a>
              </div>
              <div class="item-2">
                <a class="featuredLink" href={featuredSample[1].node.frontmatter.path}>
                  <img class="featuredImage" alt="second feature" src={featuredSample[1].node.frontmatter.source.childImageSharp.sizes.src}></img>
                  <div class="featuredInfo">
                    <h2>{featuredSample[1].node.frontmatter.title}</h2>
                    <small>
                      {featuredSample[1].node.frontmatter.type} by {featuredSample[1].node.frontmatter.author}
                    </small>
                    <Shortenfeatured>
                      {featuredSample[1].node.excerpt}
                    </Shortenfeatured>
                  </div>
                </a>
              </div>
              <div class="item-3">
                <a class="featuredLink" href={featuredSample[2].node.frontmatter.path}>
                <img class="featuredImage" alt="third feature" src={featuredSample[2].node.frontmatter.source.childImageSharp.sizes.src}></img>
                  <div class="featuredInfo">
                    <h2>{featuredSample[2].node.frontmatter.title}</h2>
                    <small>
                      {featuredSample[2].node.frontmatter.type} by {featuredSample[2].node.frontmatter.author}
                    </small>
                    <Shortenfeatured>
                      {featuredSample[2].node.excerpt}
                    </Shortenfeatured>
                  </div>
                </a>
              </div>
          </div>



          <h4>Explore all</h4>
          <Piecepreviewrow>
            {fictionSample.map(post => (
              <a href={post.node.frontmatter.path}>
                <div class="piecepreviewcolumn">
                  <div key={post.node.id} class="piecepreview fictionpreview">
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
            <a href="/fiction"><h4 class="seemore">See more fiction </h4></a>
          </Piecepreviewrow>

          <div class="artRow">

            <div class="artSelection">
              <div class="artpreviewrow">
                {artSample.map(post => (
                    <a href={post.node.frontmatter.path}>
                      <div class="artTitleArtist" key={post.node.id}>
                        <h3>{post.node.frontmatter.title}</h3>
                        <small>
                          {post.node.frontmatter.type} by {post.node.frontmatter.author}
                        </small>
                      </div>
                    </a>
                ))
                }
              </div>
              </div>

              <div class="rightmostArt">
                <div class="artpiece">
                  <div class="artitem-1">
                    <a href={artSample[0].node.frontmatter.path}>
                      <div class="artDisplay"><img alt={artSample[0].node.frontmatter.title} src={artSample[0].node.frontmatter.source.childImageSharp.sizes.src} /></div>
                    </a>
                  </div>
                  <div class="artitem-2">
                    <a href={artSample[1].node.frontmatter.path}>
                      <div class="artDisplay"><img alt={artSample[1].node.frontmatter.title} src={artSample[1].node.frontmatter.source.childImageSharp.sizes.src} /></div>
                    </a>
                  </div>
                  <div class="artitem-3">
                    <a href={artSample[2].node.frontmatter.path}>
                      <div class="artDisplay"><img alt={artSample[2].node.frontmatter.title} src={artSample[2].node.frontmatter.source.childImageSharp.sizes.src} /></div>
                    </a>
                  </div>
                  <div class="artitem-4">
                    <a href={artSample[3].node.frontmatter.path}>
                      <div class="artDisplay"><img alt={artSample[3].node.frontmatter.title} src={artSample[3].node.frontmatter.source.childImageSharp.sizes.src} /></div>
                    </a>
                  </div>
                </div>
              </div>
        </div>
        <a href="/art"><h4 class="seemore">See more art</h4></a>


        <Piecepreviewrow>
          {essaySample.map(post => (
            <a href={post.node.frontmatter.path}>
              <div class="piecepreviewcolumn">
                <div key={post.node.id} class="piecepreview essaypreview">
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
          <a href="/personalessay"><h4 class="seemore">See more personal essays </h4></a>
        </Piecepreviewrow>

        <Piecepreviewrow>
          {poetrySample.map(post => (
              <div class="piecepreviewcolumn">

                <div key={post.node.id} class="piecepreview poetrypreview">
                <a href={post.node.frontmatter.path}>

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
                    </a>

                </div>

              </div>
          ))}
          <a href="/poetry"><h4 class="seemore">See more poetry </h4></a>
        </Piecepreviewrow>


        </Layout>

    )}
  }
}


export default Index;

export const pieceQuery = graphql`
    query PieceIndexQuery {
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
      fiction: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/fiction/"}}) {
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
      personalessay: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/personalessay/"}}) {
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
      poetry: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/poetry/"}}) {
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
      art: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/art/"}}) {
        edges {
          node {
            id
            frontmatter {
              path
              source {
                childImageSharp{
                  sizes(maxWidth: 630) {
                      src
                  }
                }
              }
              title
              author
              type
            }
          }
        }
      }
    }
`
