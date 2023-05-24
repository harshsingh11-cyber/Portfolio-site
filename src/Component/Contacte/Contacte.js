import React from 'react';
import  { useRef } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine,RiWhatsappLine } from "react-icons/ri";
import './Contacte.css';
import emailjs from 'emailjs-com';

function Contacte() {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6v8qwff', 'template_6872x5k', form.current, 'XIl5dsDJgqUo8RSxh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contacte'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hchouhan689@gmail.com</h5>
            <a href="mailto: hchouhan689@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>harsh_chauhan.11</h5>
            <a href="https://instagram.com/harsh_chauhan.11" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <RiWhatsappLine className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>7067662791</h5>
            <a href="#" target='_blank' >Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id=""  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacte
