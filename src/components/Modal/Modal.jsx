import React, { useEffect, useState } from "react";
import img15 from "./../../assets/svg/back-call.svg";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";

const ModalStyles = styled.div`
  .back-call {
    position: fixed;
    top: 30vh;
    right: 0px;
    z-index: 100;
    width: 300px;
    background: #000000;
    color: white;
    font-family: "Montserrat", sans-serif;
  }

  @media (max-width: 1199.98px) {
    .back-call {
      width: 250px;
    }
  }

  @media (max-width: 991.98px) {
    .back-call {
      width: 200px;
    }
  }

  .back-call .block {
    height: 100%;
    width: 100%;
    padding: 30px;
  }

  @media (max-width: 1199.98px) {
    .back-call .block {
      padding: 25px;
    }
  }

  @media (max-width: 991.98px) {
    .back-call .block {
      padding: 20px;
    }
  }

  .back-call .block .exit {
    position: absolute;
    left: -15px;
    top: -15px;
    -ms-flex-item-align: end;
    align-self: flex-end;
    margin-bottom: 40px;
    width: 32px;
    height: 32px;
    opacity: 1;
    z-index: 101;
    cursor: pointer;
    background: #ffd600;
  }

  .back-call .block .exit:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .back-call .block .exit:before,
  .back-call .block .exit:after {
    top: 6px;
    position: absolute;
    left: 15px;
    content: " ";
    height: 20px;
    width: 1px;
    background-color: black;
  }

  .back-call .block .exit:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .back-call .block .exit:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .back-call .block form .title {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    border-bottom: 1px solid #ffd600;
    padding: 10px 0px;
    margin-bottom: 30px;
  }

  @media (max-width: 1199.98px) {
    .back-call .block form .title {
      margin-bottom: 26px;
    }
  }

  @media (max-width: 991.98px) {
    .back-call .block form .title {
      margin-bottom: 22px;
    }
  }

  .back-call .block form .title h2 {
    font-weight: 300;
    font-size: 16px;
    padding-bottom: 8px;
  }

  @media (max-width: 1199.98px) {
    .back-call .block form .title h2 {
      font-size: 14px;
      padding-bottom: 7px;
    }
  }

  @media (max-width: 991.98px) {
    .back-call .block form .title h2 {
      font-size: 11px;
      padding-bottom: 6px;
    }
  }

  .back-call .block form .title .phone {
    font-weight: 600;
    font-size: 18px;
  }

  @media (max-width: 1199.98px) {
    .back-call .block form .title .phone {
      font-size: 16px;
    }
  }

  @media (max-width: 991.98px) {
    .back-call .block form .title .phone {
      font-size: 13px;
    }
  }

  .back-call .block form .info {
    margin-bottom: 30px;
  }

  @media (max-width: 1199.98px) {
    .back-call .block form .info {
      margin-bottom: 26px;
    }
  }

  @media (max-width: 991.98px) {
    .back-call .block form .info {
      margin-bottom: 22px;
    }
  }

  .back-call .block form .info p {
    font-weight: 400;
    font-size: 12px;
  }

  @media (max-width: 1199.98px) {
    .back-call .block form .info p {
      font-size: 10px;
    }
  }

  @media (max-width: 991.98px) {
    .back-call .block form .info p {
      font-size: 7px;
    }
  }

  .back-call .block form input {
    width: 100%;
    border: 1px solid white;
    background: none;
    padding: 10px 15px;
    margin-bottom: 30px;
    caret-color: white;
    color: white;
    font-size: 12px;
  }

  @media (max-width: 1199.98px) {
    .back-call .block form input {
      font-size: 10px;
      padding: 8px 12px;
    }
  }

  @media (max-width: 991.98px) {
    .back-call .block form input {
      font-size: 8px;
      padding: 5px 10px;
    }
  }

  .back-call .block form button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: auto;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 16px;
    background: none;
    color: #ffc729;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
    gap: 10px;
    padding-right: 5px;
  }

  .back-call .block form button:hover {
    color: white;
    padding-right: 0px;
  }

  @media (max-width: 1199.98px) {
    .back-call .block form button {
      font-size: 12px;
    }
  }

  @media (max-width: 991.98px) {
    .back-call .block form button {
      font-size: 8px;
    }
  }

  .back-call .block form button .icon {
    width: 51px;
    height: 54px;
    fill: none;
  }

  @media (max-width: 1199.98px) {
    .back-call .block form button .icon {
      width: 48px;
      height: 51px;
    }
  }

  @media (max-width: 991.98px) {
    .back-call .block form button .icon {
      width: 45px;
      height: 48px;
    }
  }

  @media (max-width: 767.98px) {
    .back-call .block form button .icon {
      width: 42px;
      height: 45px;
    }
  }

  .back-call .block form button svg {
    padding-left: 5px;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }
`;

export default function Modal({ close }) {
  emailjs.init("E0i2RoE9nEIERi1ie");
  const [open, setOpen] = useState(false);

  const sendEmail = (templateParams) =>
    emailjs.send("service_4sp3219", "template_34h9wmj", templateParams).then(
      function (response) {
        close();
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );

  return (
    <ModalStyles>
      <div className={open ? "back-call open_block" : "back-call"}>
        <div className="block">
          <button className="exit" onClick={close}></button>
          <Formik
            initialValues={{
              phone: "",
            }}
            validate={(values) => {
              const errors = {};

              if (!values.phone) {
                errors.name = "Required";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                var templateParams = {
                  to_name: "Arcticon",
                  from_phone: values.phone,
                };
                sendEmail(templateParams);
                setSubmitting(false);
              }, 400);
              // resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="form">
                <div className="title">
                  <h2>Телефон для связи</h2>
                  <h2 className="phone">+7 (495) 409-32-14</h2>
                  <div className="line"></div>
                </div>
                <div className="info">
                  <p>Оставьте свой номер телефона и мы Вам перезвоним.</p>
                </div>
                <Field
                  className="field"
                  type="phone"
                  name="phone"
                  placeholder="Введите номер"
                />
                <ErrorMessage className="error" name="phone" component="div" />
                <button type="submit">
                  Перезвонить
                  <img className="icon" src={img15} alt="" />
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </ModalStyles>
  );
}
