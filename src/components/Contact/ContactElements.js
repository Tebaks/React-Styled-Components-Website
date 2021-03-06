import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 600px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 600px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const ContactPageIcon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 600px) {
    margin-left: 8px;
    margin-top: 20px;
    font-size: 24px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 600px) {
    padding: 15px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 1000px;
  height: 600px;
  width: 50%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 80px 20px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 600px) {
    height: 70%;
    width: 90%;
  } ;
`;

export const FormH1 = styled.h1`
  margin-bottom: 20px;
  color: #fff;
  font-size: 30px;
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  } ;
`;

export const FormLabel = styled.label`
  font-size: 20px;
  align-self: flex-start;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 5px 16px;
  margin-bottom: 20px;
  width: 100%;
  height: 35px;
  border: none;
  border-radius: 4px;
  @media screen and (max-width: 600px) {
    margin-bottom: 5px;
    height: 25px;
  } ;
`;

export const FormButton = styled.button`
  background: #01bf71;
  width: 40%;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    padding: 10px;
    font-size: 16px;
  } ;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const FormTextArea = styled.textarea`
  padding: 5px 16px;
  margin-bottom: 32px;
  width: 100%;
  height: 100px;
  border: none;
  border-radius: 4px;

  @media screen and (max-width: 600px) {
    margin-bottom: 24px;
    height: 60px;
  } ;
`;

export const FormItemWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 600px) {
    height: 70%;
    width: 90%;
  } ;
`;
