import React from 'react'

export default function ContactForm() {
  return (
    <section className='form-section'>
      <div className='form-container'>
        <h4 className='yung-h1'>Have a question? Contact Us</h4>
        <form className='contact-form'>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Phone' />
          <textarea placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
          <button type='button' className='button'>Send</button>
        </form>
      </div>
    </section>
  )
}
