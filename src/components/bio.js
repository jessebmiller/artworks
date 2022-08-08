/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            instagram
          }
          commerce {
            etsy
            redbubble
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const { author, social, commerce }  = data.site.siteMetadata

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.jpg"
        width={150}
        height={150}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          <strong>{author.name}</strong> {author?.summary || null}
          <br /><br />
          <a href={social.instagram}>
            Follow along on Instagram
          </a>
          <br /><br />
          Find my work on <a href={commerce.etsy}>Etsy</a> and <a href={commerce.redbubble}> Redbubble </a>
        </p>
      )}
    </div>
  )
}

export default Bio
