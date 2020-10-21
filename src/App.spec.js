import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import App from './App'
import MarkdownEditor from './components/MarkdownEditor'

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper)
  })

  it('contains a markdown editor', () => {
    const wrapper = shallow(<App />)
    const handleClick = sinon.spy()
    const renderText = sinon.spy()
    const text = '# Hello'
    expect(wrapper.find(
      <MarkdownEditor
        handleChange={handleClick}
        renderText={renderText}
        text={text}
      />
    ))
  })
})
