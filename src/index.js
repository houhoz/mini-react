// src/index
import React from '../react'

const element = (
  <div id='foo'>
    <a>bar</a>
    <b />
    <div>foo</div>
  </div>
)

console.log(element)
React.render(element, document.getElementById('root'))
