import React from 'react'
import PropTypes from 'prop-types'
import TextareaAutosize from 'react-textarea-autosize'

function MarkdownEditor (props) {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-6 editor'>
          <TextareaAutosize
            style={{ resize: 'none' }}
            onChange={props.handleChange}
            className='form-control'
            value={props.text}
            autoFocus
          />
        </div>
        <div className='col-sm-6 mr-auto preview'>
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
