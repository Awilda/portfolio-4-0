import React, { Component } from 'react'

class Contact extends Component {
  render () {
    return <div className='Contact slide'>
      <h4>Connect with me :)</h4>
      <p><a className="contact_link" target='_blank' href='mailto:awildacouverthier@gmail.com'> Email Me! </a></p>
      <p><a className="contact_link" target='_blank' href='https://github.com/awilda'> Check out my Github </a></p>
      <p><a className="contact_link" target='_blank' href='https://www.linkedin.com/in/awildacouverthier/'> Visit me on LinkedIn </a></p>
    </div>
  }
}

export default Contact
