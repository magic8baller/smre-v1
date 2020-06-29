import React from 'react'
import {graphql} from "gatsby";
import Layout from '../components/layout'
import ContactSection from '../components/contact-section/ContactSection.jsx'
import MapSection from '../components/map/Map'
import 'twin.macro'
export const MapQuery = graphql`
query {
  allMarkdownRemark(filter: {frontmatter: {title: {eq: "Map"}}}) {
    edges {
      node {
        frontmatter {
          title
          description
        }
        html
      }
    }
  }
}

`
const location = {
	address: '4713 Avenue N, Brooklyn, ny.',
	lat: 40.619002,
	lng: -73.929236
}
const About = ({data}) => {
	return (
		<div tw='pt-40 bg-gray-900'>
	<ContactSection />
<MapSection location={location} zoomLevel={17} />
		</div>

	)
}

export default About
