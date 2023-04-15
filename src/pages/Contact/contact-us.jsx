/** @format */

import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import {
  ImageStyle,
  CTAImage,
  FormStyle,
  GridMain,
  RightSide,
  MiddleSide,
  LeftSide,
  HeaderGrid,
  SendButton,
  TextBox,
  InputStyle,
} from "./contact-us.styles";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  const themeColor = useSelector((state) => state.theme);
  const picture = require("../../assets/contact-plant.jpg");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sa2ddkf",
        "template_k3g96qk",
        form.current,
        "QIGecMJ8HuCpl26B_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <GridMain>
        <HeaderGrid colors={themeColor}>
          <h1>Contact us</h1>
        </HeaderGrid>
        <RightSide colors={themeColor}>
          <p>
            Thank you for reaching out, let us a know a little bit about
            yourself, and <br></br>
            we will get in touch as soon as we can.
          </p>
          <p>
            Have a suggestion and want to remain anonymous? No problem!{" "}
            <br></br>
            Just leave the <i>email</i> section blank
          </p>
          <ImageStyle>
            <CTAImage img src={picture} alt="plant" />
          </ImageStyle>
        </RightSide>
        <LeftSide>
          <FormStyle colors={themeColor}>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name:</label>
              <InputStyle>
                <input type="text" name="from_name" />
              </InputStyle>
              <label>Email:</label>
              <InputStyle>
                <input type="text" name="email" />
              </InputStyle>
              <label>Subject:</label>
              <InputStyle>
                <input type="text" name="subject" />
              </InputStyle>
              <label>
                <b>Message:</b>
              </label>
              <TextBox>
                <textarea name="message" />
              </TextBox>
              <SendButton colors={themeColor} onClick={sendEmail}>
                Send Message
              </SendButton>
            </form>
          </FormStyle>
        </LeftSide>
        <MiddleSide>
          <FormStyle colors={themeColor}>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name:</label>
              <InputStyle>
                <input type="text" name="from_name" />
              </InputStyle>
              <label>Email:</label>
              <InputStyle>
                <input type="text" name="email" />
              </InputStyle>
              <label>Subject:</label>
              <InputStyle>
                <input type="text" name="subject" />
              </InputStyle>
              <label>
                <b>Email Body:</b>
              </label>
              <TextBox>
                <textarea name="message" />
              </TextBox>
              <SendButton colors={themeColor} onClick={sendEmail}>
                Send Email
              </SendButton>
            </form>
          </FormStyle>
        </MiddleSide>
      </GridMain>
      <SendButton
        colors={themeColor}
        onClick={(e) => {
          e.preventDefault();
          navigate("/bug");
        }}
      >
        Send Bug Report
      </SendButton>
    </>
  );
};
export default Contact;
