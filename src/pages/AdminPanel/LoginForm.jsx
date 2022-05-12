import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

//nikita@gmail.com
// 123456

import styled from "styled-components";

const LoginFormStyles = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    div {
      width: 270px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      input {
        padding: 5px;
      }
    }
    button {
      cursor: pointer;
      margin-left: auto;
      width: fit-content;
      padding: 5px 10px;
    }
  }
`;

export default function LoginForm(props) {
  let email = sessionStorage.getItem("login");
  let password = sessionStorage.getItem("password");

  if ((email != null) & (password != null)) {
    signInWithEmailAndPassword(auth, email, password).then((cred) => {
      if (cred != null) {
        props.setAutorised(true);
      }
    });
  }

  function singUp(e) {
    e.preventDefault();

    const { email, password } = e.target.elements;

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((cred) => {
        if (cred == null) {
          alert("wrong user data");
        } else {
          sessionStorage.setItem("login", email.value);
          sessionStorage.setItem("password", password.value);

          props.setAutorised(true);
        }
        e.target.reset();
      })
      .catch((err) => {
        alert("wrong user data");
        console.log(err.message);
      });
  }

  return (
    <LoginFormStyles>
      <form className="signup" onSubmit={singUp}>
        <div className="email">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
        </div>
        <button>Войти</button>
      </form>
    </LoginFormStyles>
  );
}
