import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'
import {
    ImageStyle,
    CTAImage,
    FormStyle
} from './contact-us.styles'
const Contact = () => {
    const picture = require('../../assets/contact-plant.jpg')
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sa2ddkf', 'template_k3g96qk', form.current, 'QIGecMJ8HuCpl26B_')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <><h1>Contact us</h1>
        <p>Thank you for reachin out, let us a know a little bit about yourself, and</p>
        <p>we will get in touch as soon as we can.</p>
        <p>Have a suggestion and want to remain anonymous? No problem!</p>
        <p>Just leave the <i>email</i> section blank</p>
        <ImageStyle>
            <CTAImage img src={picture} alt = "plant"/>
        </ImageStyle>
        <FormStyle>
        <form ref={form} onSubmit={sendEmail}>
            <label><b>Name</b></label>
            <input type = "text" name = "from_name" />
            <label>Email</label>
            <input type = "text" name = "email" />
            <label>Subject</label>
            <input type = "text" name = "subject" />
            <label><b>Message</b></label>
            <textarea name = "message" />
            <input type = "submit" value = "Send"/>
        </form>
        </FormStyle>
        </>
    );
}; 
export default Contact;