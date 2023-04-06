import React, { useState } from 'react';
import style from './ContactFrom.module.css'

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { name, email, message };
        const response = await fetch('https://formspree.io/f/xyyanepy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            alert('Thank you for your message!');
            setName('');
            setEmail('');
            setMessage('');
        } else {
            alert('Oops! Something went wrong.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`${style.ContactMeForm} w-1/2 relative  h-1/2`}>
            <section className='flex items-center justify-around'>
                <div className={style.sectionContainer}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div className={style.sectionContainer}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
            </section>

            <section className='flex flex-col items-center justify-around'>
                <div className={style.sectionContainer2}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                </div>

                <button className={style.submitBtn} type="submit">Send</button>
            </section>
        </form>
    );
}

export default ContactForm;




