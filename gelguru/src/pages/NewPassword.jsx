import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../modules/newPassword.module.css";
import guruIcon from "/assets/guru.png"
import visibilityOffIcon from "/assets/visibility_off.png"
import visibilityOnIcon from "/assets/visibility.png"
import checkIcon from "/assets/check.png"
import circleIcon from "/assets/circle.png"
import errorIcon from "/assets/error.png"

const NewPassword = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [firstPasswordClicked, setFirstPasswordClicked] = useState(false);
  const [password, setPassword] = useState();
  const [reenteredPassword, setReenteredPassword] = useState("");

  const handleTogglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const handleTogglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleFirstPasswordClick = () => {
    setFirstPasswordClicked(true);
  };

  const hanldePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleReenteredPassword = (e) => {
    setReenteredPassword(e.target.value);
  };

  const ifPswIsCapital = /[A-Z]/.test(password);

  const ifPswIsDigital = /\d/.test(password);

  const ifPswIsEight = password?.length >= 8;

  const ifPswIsSimbol = /[^A-Za-z0-9]/.test(password);

  const passwordsMatchCheck = password === reenteredPassword;

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    if (passwordsMatchCheck) {
      //ბექი
    }
  };
  return (
    <div>
      <div className={styles.bg}></div>
      <div className={styles['new-containerPswd']}>
        <div className={styles['left-side']}>
          <div className={styles.logo}>
            <Link to={"/signin"}>
              <div className={styles.img}>
                <img src={guruIcon} alt="logo" />
              </div>
            </Link>
            <Link to={"/signin"}>
              <h2 className={styles['main-name']}>
                GE<span>L</span>Gu<span>r</span>u
              </h2>
            </Link>
          </div>
        </div>
        <div className={styles['right-side']}>
          <div className={styles['input-group']}>
            <div className={styles.progres}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
            <p className={styles['sign-in']}>Set a new password</p>
            <div className={`${styles['input-email']} ${styles.box}`}>
              <div className={styles['form-group']}>
                {showPassword1 ? (
                  <img
                    className={styles['visibility_off']}
                    src={visibilityOffIcon}
                    alt=""
                    onClick={handleTogglePassword1}
                  />
                ) : (
                  <img
                    className={styles['visibility']}
                    src={visibilityOnIcon}
                    alt=""
                    onClick={handleTogglePassword1}
                  />
                )}
                <input
                  className={`${styles.input} ${styles.password}`}
                  type={showPassword1 ? 'text' : 'password'}
                  id="password"
                  name="password"
                  onClick={handleFirstPasswordClick}
                  onChange={hanldePassword}
                  value={password}
                />
                <label className={styles['label']} htmlFor="password">
                  Enter Password
                </label>
              </div>
            </div>
            <div className={styles['pass-check']}>
              <div className={!firstPasswordClicked ? styles.hidden : ''}>
                <div className={styles['circle']}>
                  {ifPswIsEight ? (
                    <img src={checkIcon} alt="" />
                  ) : (
                    <img src={circleIcon} alt="" />
                  )}
                  <p className={styles['check']}>At least 8 characters</p>
                </div>
                <div className={styles['circle']}>
                  {ifPswIsCapital ? (
                    <img src={checkIcon} alt="" />
                  ) : (
                    <img src={circleIcon} alt="" />
                  )}
                  <p className={styles['check']}>At least 1 capital letter </p>
                </div>
              </div>
              <div className={!firstPasswordClicked ? styles.hidden : ''}>
                <div className={styles['circle']}>
                  {ifPswIsDigital ? (
                    <img src={checkIcon} alt="" />
                  ) : (
                    <img src={circleIcon} alt="" />
                  )}
                  <p className={styles['check']}>At least 1 digit </p>
                </div>
                <div className={styles['circle']}>
                  {ifPswIsSimbol ? (
                    <img src={checkIcon} alt="" />
                  ) : (
                    <img src={circleIcon} alt="" />
                  )}
                  <p className={styles['check']}>At least 1 special character </p>
                </div>
              </div>
            </div>
            <div className={`${styles['input-email']} ${styles.box}`}>
              <div className={styles['form-group']}>
                {showPassword2 ? (
                  <img
                    className={styles['visibility_off']}
                    src={visibilityOffIcon}
                    alt=""
                    onClick={handleTogglePassword2}
                  />
                ) : (
                  <img
                    className={styles['visibility']}
                    src={visibilityOnIcon}
                    alt=""
                    onClick={handleTogglePassword2}
                  />
                )}
                <input
                  className={`${styles.input} ${styles.password}`}
                  type={showPassword2 ? 'text' : 'password'}
                  id="reenteredPassword"
                  name="reenteredPassword"
                  onChange={handleReenteredPassword}
                  value={reenteredPassword}
                />
                <label
                  className={styles['label']}
                  htmlFor="reenteredPassword"
                >
                  Re-enter Password
                </label>
                <div
                  className={
                    passwordsMatchCheck || !reenteredPassword
                      ? styles['hidden']
                      : styles['match']
                  }
                >
                  <img src={errorIcon} alt="" />
                  <p>Does not match</p>
                </div>
              </div>
            </div>
            <Link to={"/signin"}>
              <button onClick={handleNextButtonClick} className={styles['next-btn']}>
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;