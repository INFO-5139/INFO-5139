import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'
import {
    ImageStyle,
    CTAImage,
    FormStyle,
    GridMain,
    RightSide,
    LeftSide,
    HeaderGrid,
    SendButton,
    TextBox,
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

        <>
        <GridMain>
            <HeaderGrid>
                <h1>Contact us</h1>
            </HeaderGrid>
            <RightSide>
                <p>Thank you for reachin out, let us a know a little bit about yourself, and <br></br>
                we will get in touch as soon as we can.</p>
                <p>Have a suggestion and want to remain anonymous? No problem! <br></br>
                Just leave the <i>email</i> section blank</p>
                <ImageStyle>
                    <CTAImage img src={picture} alt = "plant"/>
                </ImageStyle>
            </RightSide>
            <LeftSide>
                <FormStyle>
                    <form ref={form} onSubmit={sendEmail}>
                        <label><b>Name</b></label>
                        <input type = "text" name = "from_name" />
                        <label>Email</label>
                        <input type = "text" name = "email" />
                        <label>Subject</label>
                        <input type = "text" name = "subject" />
                        <label><b>Message</b></label>
                        <TextBox><textarea name = "message"  style = {{height:'50px'}}/></TextBox>
                        <SendButton onClick={sendEmail}>Send Message</SendButton>
                    </form>
                </FormStyle>
            </LeftSide>
        </GridMain>
        </>
    );
}; 
export default Contact;