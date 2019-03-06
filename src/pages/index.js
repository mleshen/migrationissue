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


class Index extends React.Component {

  constructor(props) {
    super(props)
    this.featuredSample = _.sampleSize(props.data.all.edges, 3)
    this.artSample = _.sampleSize(props.data.art.edges, 4)
    this.essaySample = _.sampleSize(props.data.personalessay.edges, 3)
    this.fictionSample = _.sampleSize(props.data.fiction.edges, 3)
    this.poetrySample = _.sampleSize(props.data.poetry.edges, 3)
  }

  render() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`literary`, `art`, `magazine`]} />

      <Navbar></Navbar>

      <ul class="genreBar">
        <li class="genre"><Link to="/" activeClassName="active">All</Link></li>
        <li class="genre"><Link to="/art" activeClassName="active">Art</Link></li>
        <li class="genre"><Link to="/fiction" activeClassName="active">Fiction</Link></li>
        <li class="genre"><Link to="/personalessay" activeClassName="active">Personal Essays</Link></li>
        <li class="genre"><Link to="/poetry" activeClassName="active">Poetry</Link></li>
        <li class="genre"><Link to="/interview" activeClassName="active">Interviews</Link></li>
      </ul>

      <h4 class="top">Featured</h4>
      <div class="featuredrow">
        {this.featuredSample.map(post => (
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
          <div class="item-1" href={this.featuredSample[0].node.frontmatter.path}>
            <a class="featuredLink" href={this.featuredSample[0].node.frontmatter.path}>
            <img class="featuredImage" alt="first feature" src={this.featuredSample[0].node.frontmatter.source.childImageSharp.sizes.src}></img>
              <div class="featuredInfo">
                <h2>{this.featuredSample[0].node.frontmatter.title}</h2>
                <small>
                  {this.featuredSample[0].node.frontmatter.type} by {this.featuredSample[0].node.frontmatter.author}
                </small>
                <Shortenfeatured>
                  {this.featuredSample[0].node.excerpt}
                </Shortenfeatured>
              </div>
            </a>
          </div>
          <div class="item-2">
            <a class="featuredLink" href={this.featuredSample[1].node.frontmatter.path}>
              <img class="featuredImage" alt="second feature" src={this.featuredSample[1].node.frontmatter.source.childImageSharp.sizes.src}></img>
              <div class="featuredInfo">
                <h2>{this.featuredSample[1].node.frontmatter.title}</h2>
                <small>
                  {this.featuredSample[1].node.frontmatter.type} by {this.featuredSample[1].node.frontmatter.author}
                </small>
                <Shortenfeatured>
                  {this.featuredSample[1].node.excerpt}
                </Shortenfeatured>
              </div>
            </a>
          </div>
          <div class="item-3">
            <a class="featuredLink" href={this.featuredSample[2].node.frontmatter.path}>
            <img class="featuredImage" alt="third feature" src={this.featuredSample[2].node.frontmatter.source.childImageSharp.sizes.src}></img>
              <div class="featuredInfo">
                <h2>{this.featuredSample[2].node.frontmatter.title}</h2>
                <small>
                  {this.featuredSample[2].node.frontmatter.type} by {this.featuredSample[2].node.frontmatter.author}
                </small>
                <Shortenfeatured>
                  {this.featuredSample[2].node.excerpt}
                </Shortenfeatured>
              </div>
            </a>
          </div>
      </div>



      <h4>Explore all</h4>
      <Piecepreviewrow>
        {this.fictionSample.map(post => (
          <a href={post.node.frontmatter.path}>
            <div class="piecepreviewcolumn">
              <div class="piecepreview fictionpreview">
                <div key={post.node.id}>
                  <h3>{post.node.frontmatter.title}</h3>
                  <small>
                    {post.node.frontmatter.type} by {post.node.frontmatter.author}
                  </small>
                  <Shorten>
                    {post.node.excerpt}
                  </Shorten>
                  <br />
                  <div class="fadetowhite"></div>
                  <Circlebutton> <small> Read more </small> </Circlebutton>
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
            {this.artSample.map(post => (
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
                <a href={this.artSample[0].node.frontmatter.path}>
                  <div class="artDisplay"><img alt={this.artSample[0].node.frontmatter.title} src={this.artSample[0].node.frontmatter.source.childImageSharp.sizes.src} /></div>
                </a>
              </div>
              <div class="artitem-2">
                <a href={this.artSample[1].node.frontmatter.path}>
                  <div class="artDisplay"><img alt={this.artSample[1].node.frontmatter.title} src={this.artSample[1].node.frontmatter.source.childImageSharp.sizes.src} /></div>
                </a>
              </div>
              <div class="artitem-3">
                <a href={this.artSample[2].node.frontmatter.path}>
                  <div class="artDisplay"><img alt={this.artSample[2].node.frontmatter.title} src={this.artSample[2].node.frontmatter.source.childImageSharp.sizes.src} /></div>
                </a>
              </div>
              <div class="artitem-4">
                <a href={this.artSample[3].node.frontmatter.path}>
                  <div class="artDisplay"><img alt={this.artSample[3].node.frontmatter.title} src={this.artSample[3].node.frontmatter.source.childImageSharp.sizes.src} /></div>
                </a>
              </div>
            </div>
          </div>
    </div>
    <a href="/art"><h4 class="seemore">See more art</h4></a>



      <Piecepreviewrow>
        {this.essaySample.map(post => (
          <a href={post.node.frontmatter.path}>
          <div class="piecepreviewcolumn">
            <div class="piecepreview essaypreview">
              <div key={post.node.id}>
                <h3>{post.node.frontmatter.title}</h3>
                <small>
                  {post.node.frontmatter.type} by {post.node.frontmatter.author}
                </small>
                <Shorten>
                  {post.node.excerpt}
                </Shorten>
                <br />
                <div class="fadetowhite"></div>
                <Circlebutton> <small> Read more </small> </Circlebutton>
              </div>
            </div>
          </div>
          </a>
        ))}
        <a href="/personalessay"><h4 class="seemore">See more personal essays</h4></a>
      </Piecepreviewrow>

      <Piecepreviewrow>
        {this.poetrySample.map(post => (
          <a href={post.node.frontmatter.path}>
            <div class="piecepreviewcolumn">
              <div class="piecepreview poetrypreview">
                <div key={post.node.id}>
                  <h3>{post.node.frontmatter.title}</h3>
                  <small>
                    {post.node.frontmatter.type} by {post.node.frontmatter.author}
                  </small>
                  <Shorten>
                    {post.node.excerpt}
                  </Shorten>
                  <br />
                  <div class="fadetowhite"></div>
                  <Circlebutton> <small> Read more </small> </Circlebutton>
                </div>
              </div>
            </div>
          </a>
        ))}
        <a href="/poetry"><h4 class="seemore">See more poetry</h4></a>
      </Piecepreviewrow>
    </Layout>

  )}
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
