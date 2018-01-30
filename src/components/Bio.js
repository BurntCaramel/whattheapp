import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './me.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return <div>
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Patrick Smith`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%'
          }}
        />
        <p>
          Written by <strong>Patrick Smith</strong> who lives and works in Melbourne.{' '}
          <br />
          <a href="https://twitter.com/concreteniche">
            He posts about development &amp; design on Twitter
          </a>
        </p>
      </div>
    </div>
  }
}

export default Bio
