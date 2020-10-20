import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-center">
      <Link to={`${process.env.PUBLIC_URL}/`} className="navbar-brand mb-0 h1">MarkdownShare</Link>
    </nav>
  )
}
