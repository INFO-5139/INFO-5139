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
} from "./bug-report.styles";
const BugReport = () => {
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
          <h1>Bug Report Page:</h1>
        </HeaderGrid>
        <RightSide colors={themeColor}>
          <p>
            Thank you for taking the time to report a bug to us. We will get our
            developers on squashing right away!
          </p>
        </RightSide>
        <MiddleSide>
          <FormStyle colors={themeColor}>
            <form ref={form} onSubmit={sendEmail}>
              <label>Your Name:</label>
              <InputStyle>
                <input type="text" name="from_name" />
              </InputStyle>
              <label>Email:</label>
              <InputStyle>
                <input type="text" name="email" />
              </InputStyle>
              <label>Error Code if present:</label>
              <InputStyle>
                <input type="text" name="subject" />
              </InputStyle>
              <label>
                <b>Description of the bug:</b>
              </label>
              <TextBox>
                <textarea name="message" />
              </TextBox>
              <SendButton colors={themeColor} onClick={sendEmail}>
                Send Bug Report
              </SendButton>
            </form>
          </FormStyle>
        </MiddleSide>
      </GridMain>
    </>
  );
};
export default BugReport;
