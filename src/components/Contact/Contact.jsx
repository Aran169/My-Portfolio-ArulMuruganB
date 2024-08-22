import React from "react";
import styles from "./ContactStyle.module.css";
function Contact() {
  return (
    <section id='contact' className={styles.container}>
      <h1 className='sectiontitle'>Contact</h1>
      <form action='https://formspree.io/f/mrbzlygd' method="POST">
        <div className='formGroup'>
          <label htmlFor='name' hidden>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='email' hidden>
            Email
          </label>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Email'
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='message' hidden>
            Message
          </label>
          <input
            type='text'
            name='message'
            id='message'
            placeholder='Message'
            required
          />
        </div>
        <input className='hoverbtn' type='submit' value='Submit' />
      </form>
    </section>
  );
}

export default Contact;
