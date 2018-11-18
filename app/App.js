import React from 'react'

import { CommentThread } from '@espresso-org/aragon-comments'



export default class App extends React.Component {
  render () {
    return (
        <div>
          <h1 style={titleStyle}>Hello World!</h1>

          <CommentThread aragonApp={this.props.app} />
        </div>
    )
  }
}







const titleStyle = { 
  color: '#777', 
  fontWeight: '300', 
  textAlign: 'center' 
}