import React from 'react'
import PropTypes from 'prop-types'

function MarkdownEditor (props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6'>
          <textarea
            onChange={props.handleChange}
            className='form-control'
            rows='34'
            value={props.text}
          ></textarea>
        </div>
        <div className='col-sm-6'>
          <div
            dangerouslySetInnerHTML={props.renderText(props.text)}
          ></div>
        </div>
      </div>
    </div>
  )
}

MarkdownEditor.propTypes = {
  handleChange: PropTypes.func.isRequired,
  renderText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default MarkdownEditor
