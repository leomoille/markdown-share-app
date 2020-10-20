import React from 'react'
import { Link } from 'react-router-dom'

function NoMatch (props) {
  return (
    <div className='container text-center'>
      <h1>Oops this page doesn&apos;t exist :(</h1>
      <Link to={`${process.env.PUBLIC_URL}/`} type="button" className="btn btn-dark">Back to home</Link>
    </div>
  )
}

export default NoMatch
