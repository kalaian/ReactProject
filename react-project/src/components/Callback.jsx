import React, { Component } from 'react'

export default class Callback extends Component {
  render() {
    return (
      <div>
       <button onClick={this.props.auth.login}>Log in</button>
      </div>
    )
  }
}
