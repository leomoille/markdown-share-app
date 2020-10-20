import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render () {
    return (
      <div className="container text-center mt-4">
        <h1>Welcome to MarkdownShare</h1>
        <p>This application is still in development but you can test it!</p>
        <Link to={`${process.env.PUBLIC_URL}/editor`} type="button" className="btn btn-dark">Edit some markdown</Link>
      </div>
    )
  }
}
