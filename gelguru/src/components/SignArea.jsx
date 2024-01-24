import React from 'react';
import styles from '../modules/Signup.module.css'

const SignArea = (props) => {
  return (
    <>
      <h2>Sign up</h2>
      {props.signAttributes.map((item, index) => {
        return (
          <div key={item}>
            <div className={styles["input-box"]} key={index}>
              <input
                type={
                  item === "Password" || item === "Re-enter password"
                    ? props.pswdVisibility[item === "Password" ? 0 : 1]
                      ?.visibility
                      ? "text"
                      : "password"
                    : "text"
                }
                className={styles["info-input"]}
                onClick={() => props.inputClickHandler(item)}
                onChange={(e) => {
                  props.updateInputValue(item, e.target.value);
                  if (item === "Re-enter password") {
                    props.getReEnterPassword(e);
                  } else if (item === "Password") {
                    props.getPassword(e);
                  }
                }}
              />
              <div className={styles["input-name"]}>{item}</div>
              {item === "Re-enter password" &&
                props.reEnterPassword !== props.password &&
                props.reEnterPassword.length > 0 ? (
                <div className={styles["pswd-notMatch"]}>
                  <img src="/images/not-match.svg" alt="" />
                  <p>Does not match</p>
                </div>
              ) : (
                ""
              )}
              {item === "Password" ? (
                <>
                  <img
                    src="/images/eye.svg"
                    alt=""
                    className={styles["eye1"]}
                    onClick={() => props.toggleVisibility(0)}
                  />
                  {props.pswdVisibility[0]?.visibility ? (
                    <p className={styles["X"]} onClick={() => props.toggleVisibility(0)}>
                      X
                    </p>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}
              {item === "Re-enter password" ? (
                <>
                  <img
                    src="/images/eye.svg"
                    alt=""
                    className={
                      item === "Re-enter password" &&
                        props.reEnterPassword !== props.password &&
                        props.reEnterPassword.length > 0
                        ? `${styles["eye2"]} ${styles["position2"]}`
                        : styles["eye2"]
                    }
                    onClick={() => props.toggleVisibility(1)}
                  />
                  {props.pswdVisibility[1]?.visibility ? (
                    <p
                      className={
                        item === "Re-enter password" &&
                          props.reEnterPassword !== props.password &&
                          props.reEnterPassword.length > 0
                          ? `${styles["X"]} ${styles["positionX2"]}`
                          : styles["X"]
                      }
                      onClick={() => props.toggleVisibility(1)}
                    >
                      X
                    </p>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}
            </div>
            {item == "Password" &&
              props.conditionToggle &&
              !props.ifPswIsSafe ? (
              <div className={styles["conditions"]}>
                <div className={styles["firstConditions-row"]}>
                  <div className={`${styles["condition-box"]} ${styles["correct"]}`}>
                    <img
                      src={
                        props.password.length >= 8
                          ? "/images/correct.svg"
                          : "/images/notcorrect.svg"
                      }
                      alt=""
                    />
                    <p>At least 8 characters</p>
                  </div>
                  <div className={`${styles["condition-box"]} ${styles["correct"]}`}>
                    <img
                      src={
                        /[A-Z]/.test(props.password)
                          ? "/images/correct.svg"
                          : "/images/notcorrect.svg"
                      }
                      alt=""
                    />
                    <p>At least 1 capital letter</p>
                  </div>
                </div>
                <div className={styles["secondConditions-row"]}>
                  <div className={`${styles["condition-box"]} ${styles["incorrect"]}`}>
                    <img
                      src={
                        /\d/.test(props.password)
                          ? "/images/correct.svg"
                          : "/images/notcorrect.svg"
                      }
                      alt=""
                    />
                    <p>At least 1 digit</p>
                  </div>
                  <div className={`${styles["condition-box"]} ${styles["incorrect"]}`}>
                    <img
                      src={
                        /[^A-Za-z0-9]/.test(props.password)
                          ? "/images/correct.svg"
                          : "/images/notcorrect.svg"
                      }
                      alt=""
                    />
                    <p>At least 1 special character</p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </>
  );
};

export default SignArea;
