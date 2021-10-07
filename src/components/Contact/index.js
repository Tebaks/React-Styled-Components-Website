import React from "react";
import emailjs from "emailjs-com";
import {
  FormWrap,
  Container,
  Form,
  FormContent,
  FormTextArea,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  FormItemWrapper,
  ContactPageIcon,
} from "./ContactElements";

//Contact elements
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_KEY,
        process.env.REACT_APP_EMAIL_TEMPLATE_KEY,
        e.target,
        process.env.REACT_APP_EMAIL_USER_KEY
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
  };
  return (
    <>
      <Container>
        <FormWrap>
          <ContactPageIcon to="/">Kenan Abbak</ContactPageIcon>
          <FormContent>
            <Form action="#" onSubmit={sendEmail}>
              <FormH1>Do you want website like this? Contact me!</FormH1>
              <FormItemWrapper>
                <FormLabel htmlFor="for">Your Name</FormLabel>
                <FormInput type="name" name="name" required />
              </FormItemWrapper>
              <FormItemWrapper>
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput type="email" name="email" required />
              </FormItemWrapper>
              <FormItemWrapper>
                <FormLabel htmlFor="for">Message</FormLabel>
                <FormTextArea name="message" rows="4" required />
              </FormItemWrapper>
              <FormButton type="submit" value="send">
                Send!
              </FormButton>
              <Text>@KenanAbbak</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;
