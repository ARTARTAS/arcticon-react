import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";

import img1 from "./../../assets/img/Feedback/Mask Group.png";
import button from "./../../assets/svg/home/arrow_black.svg";

const StyledFeedback = styled.section`
  min-height: calc(100vh - 120px);
  position: relative;

  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    img {
      position: absolute;
      left: 0px;
      width: auto;
      max-width: 100%;
      height: 100%;
    }
    .rightRectangle {
      position: absolute;
      width: 90px;
      height: 100%;
      right: 0px;
      background: #ffd600;
    }
  }
  .formBlock {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .form {
      width: 460px;
      min-height: 474px;

      display: flex;
      flex-direction: column;
      background: #ffffff;
      box-shadow: 6px 6px 30px rgba(0, 0, 0, 0.1);

      padding: 40px 50px 36px 66px;

      div {
        position: relative;
        display: flex;
        justify-content: center;
      }
      .error {
        position: absolute;
        width: fit-content;
        right: 0;
        top: 5px;
        padding-right: 30px;
      }
      h1 {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;

        color: #000000;
        margin-bottom: 50px;
      }
      .field {
        width: 288.31px;

        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;

        color: #8d8d8d;
        padding: 24px 10px 11px 10px;

        border-bottom: 0.5px solid #000000;
      }
      button {
        margin: 37px 0;
        background: none;
        align-self: flex-end;
        width: 139.3px;
        height: 36px;
        right: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 10px;
        transition: all 0.2s ease-in-out;

        &:hover {
          padding-right: 0px;

          p {
            padding-right: 5px;
          }
        }

        p {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 36px;
          /* or 225% */

          letter-spacing: -0.015em;

          color: #000000;
          transition: all 0.2s ease-in-out;
        }
      }
      .checkboxBlock {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 15px;
        .checkboxText {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 300;
          font-size: 10px;
          line-height: 15px;
          /* or 150% */

          letter-spacing: -0.015em;

          color: #000000;
        }
      }
    }
  }

  @media (max-width: 767.98px) {
    .back {
      width: 100%;
      overflow: hidden;
      img {
        max-width: none;
        width: auto;
      }
    }
    .formBlock {
      padding: 0px 30px;
      h1 {
        text-align: center;
      }
      .form {
        width: 100%;
        max-width: 450px;
        padding: 30px;
        align-items: center;
        div {
          width: 100%;
        }
        .field {
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 479.98px) {
    .formBlock {
      padding: 0px 20px;
    }
  }
`;

export default function Feedback() {
  window.scrollTo(0, 0);
  const [isSubmitted, setSubmitted] = useState(false);
  emailjs.init("E0i2RoE9nEIERi1ie");

  const sendEmail = (templateParams) =>
    emailjs.send("service_4sp3219", "template_34h9wmj", templateParams).then(
      function (response) {
        setSubmitted(true);
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  return (
    <StyledFeedback>
      <div className="content">
        <div className="back">
          <img src={img1} alt="" />
          <div className="rightRectangle"></div>
        </div>
        <div className="formBlock">
          <Formik
            initialValues={{
              name: "",
              org: "",
              phone: "",
              email: "",
              toggle: "",
            }}
            validate={(values) => {
              const errors = {};

              if (!values.name) {
                errors.name = "???? ????????????????????";
              } else if (!values.org) {
                errors.org = "???? ????????????????????";
              } else if (!values.phone) {
                errors.phone = "???? ????????????????????";
              } else if (!values.email) {
                errors.email = "???? ????????????????????";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "???????????????? email ????????????";
              } else if (!values.toggle) {
                errors.toggle = "???? ????????????????????";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                var templateParams = {
                  to_name: "Arcticon",
                  from_name: values.name,
                  from_org: values.org,
                  from_phone: values.phone,
                  reply_to: values.email,
                };
                sendEmail(templateParams);
                // alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="form">
                <h1>???????????????? ???????????????? ????????????</h1>
                <div>
                  <Field
                    className="field"
                    type="name"
                    name="name"
                    placeholder="??????"
                  />
                  <ErrorMessage className="error" name="name" component="div" />
                </div>
                <div>
                  <Field
                    className="field"
                    type="organization"
                    name="org"
                    placeholder="??????????????????????"
                  />
                  <ErrorMessage className="error" name="org" component="div" />
                </div>
                <div>
                  <Field
                    className="field"
                    type="phone"
                    name="phone"
                    placeholder="??????????????"
                  />
                  <ErrorMessage
                    className="error"
                    name="phone"
                    component="div"
                  />
                </div>
                <div>
                  <Field
                    className="field"
                    type="email"
                    name="email"
                    placeholder={"?????????????????????? ??????????"}
                  />
                  <ErrorMessage
                    className="error"
                    name="email"
                    component="div"
                  />
                </div>

                <button
                  className={isSubmitting || isSubmitted ? "disabled" : ""}
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                >
                  {" "}
                  <p>
                    {isSubmitting
                      ? "??????????????????"
                      : isSubmitted
                      ? "??????????????????????"
                      : "??????????????????"}
                  </p>
                  <img src={button} alt="buttn" />
                </button>
                <div>
                  <div className="checkboxBlock">
                    <Field className="checkbox" type="checkbox" name="toggle" />
                    <p className="checkboxText">
                      ?????? ???????????????? ???? ?????????????????? ???????? ???????????????????????? ???????????? ??
                      ?????????????????????? ?? ???????????????? ????????????????????????????????????.
                    </p>
                  </div>
                  <ErrorMessage
                    className="error"
                    name="toggle"
                    component="div"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </StyledFeedback>
  );
}
