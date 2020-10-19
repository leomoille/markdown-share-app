import marked from 'marked'
import React, { Component } from 'react'
import './App.css'
import MarkdownEditor from './components/MarkdownEditor'
import Navbar from './components/Navbar'
import { sampleText } from './sampleText'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: sampleText
    }
  }

  componentDidMount () {
    const text = localStorage.getItem('text')
    if (text) {
      this.setState({ text })
    } else {
      this.setState({ text: sampleText })
    }
  }

  componentDidUpdate () {
    const { text } = this.state
    localStorage.setItem('text', text)
  }

  handleChange (event) {
    const text = event.target.value
    this.setState({ text })
  }

  renderText (text) {
    const __html = marked(text, { sanitize: true })
    return { __html }
  }

  render () {
    return (
      <>
        <Navbar />
        <MarkdownEditor handleChange={this.handleChange.bind(this)} renderText={this.renderText} text={this.state.text} />
      </>
    )
  }
}

export default App
