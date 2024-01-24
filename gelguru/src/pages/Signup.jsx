import React from 'react';

import { useEffect, useState } from "react";
// import SignArea from "../components/SignArea";
import EmailAuth from "../components/EmailAuth";
import styles from '../modules/Signup.module.css';
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { registerUser } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../hooks/useRegister';

const SignIn = () => {
  const { mutate, isPending } = useRegister()
  const [conditionToggle, setConditionToggle] = useState(false);
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [pswdVisibility, setPswdVisibility] = useState([
    { item: "Password", visibility: false },
    { item: "Re-enter password", visibility: false },
  ]);
  const [emailAuthVisible, setEmailAuthVisible] = useState(false);
  const [inputValues, setInputValues] = useState({
    Name: "",
    "Last name": "",
    Email: "",
    Password: "",
    "Re-enter password": "",
  });
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()


  const updateInputValue = (item, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [item]: value,
    }));
  };

  const nextPage = () => {
    setEmailAuthVisible(true);
  };

  const toggleVisibility = (index) => {
    setPswdVisibility((prevVisibility) => {
      const newVisibility = [...prevVisibility];
      newVisibility[index] = {
        ...newVisibility[index],
        visibility: !newVisibility[index].visibility,
      };
      return newVisibility;
    });
  };

  const ifPswIsSafe =
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    password.length >= 8 &&
    /[^A-Za-z0-9]/.test(password);



  useEffect(() => {
    if (ifPswIsSafe) {
      setConditionToggle(false);
    } else if (password.length > 0) {
      setConditionToggle(true);
    }
  }, [password]);

  const inputClickHandler = (item) => {
    item === "Password" ? setConditionToggle(true) : "";
  };

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValues.Email);




  async function onSubmit(data) {
    const registerData = data

    if (!registerData) return

    mutate(registerData)
  }

  return (
    <div className={styles.container}>
      <div className={styles["green-side"]}><img src="/images/green.svg" alt="" /></div>
      <div className={styles["logo-side"]}>
        <img src="/images/gelguru.svg" alt="" />
        <h1>
          <span>ge</span>
          <span>L</span>
          <span>Gu</span>
          <span>r</span>
          <span>u</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles["signup-box"]}>
        <div className={styles["stages"]}>
          <div className={styles["stage-one"]}></div>
          <div className={emailAuthVisible ? styles["stage-one"] : styles["stage-two"]}></div>
        </div>

        <>
          <h2>Sign up</h2>

          <div>
            <div>
              <div className={styles["input-box"]}>
                <input
                  type='text'
                  className={styles["info-input"]}
                  placeholder='Name'
                  {...register('first_name', {
                    required: 'This field is required'
                  })}
                />

              </div>
              <div className={styles["input-box"]}>
                <input
                  type='text'
                  className={styles["info-input"]}
                  placeholder='Last Name'

                  {...register('last_name', {
                    required: 'This field is required'
                  })}
                />
              </div>
              <div className={styles["input-box"]}>
                <input
                  type='email'
                  className={styles["info-input"]}
                  placeholder='Email'
                  {...register('email', {
                    required: 'This field is required'
                  })}
                />
              </div>
              <div className={styles["input-box"]}>
                <input
                  type='password'
                  className={styles["info-input"]}
                  placeholder='Password'
                  {...register('password', {
                    required: 'This field is required'
                  })}
                />
              </div>
              <div className={styles["input-box"]}>
                <input
                  type='text'
                  className={styles["info-input"]}
                  placeholder='Re-enter password'
                  {...register('repeat_password', {
                    required: 'This field is required'
                  })}
                />
              </div>
            </div>
          </div>

        </>

        {/* {emailAuthVisible && <EmailAuth length={6} />} */}
        <button
          className={styles["signup-button"]}
          type="submit"
        >
          {isPending ? 'Loading...' : 'Confirm'}
          Confirm
        </button>
      </form>
    </div>
  );
};

export default SignIn;
