import React, { useState, useRef, useEffect } from "react";
import styles from '../modules/Signup.module.css'
const EmailAuth = (props) => {
  const [otp, setOtp] = useState(Array(props.length).fill(""));
  const inputs = useRef([]);
  const [timer, setTimer] = useState(props.timerDuration || 120);
  const [timeIsUp, setTimeIsUp] = useState(false);

  const handleChange = (index, value, event) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (value && index < props.length - 1) {
      inputs.current[index + 1].focus();
    } else if (!value && index > 0 && event.key === "Backspace") {
      inputs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      } else {
        setTimeIsUp(true);
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timer]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div>
      <h1 className={styles["email-authTitle"]}>
        We have sent an authorization code to your email. Enter it below.
      </h1>
      <div className={styles["email-inputBox"]}>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            maxLength={1}
            className={styles["email-input"]}
            onChange={(e) => handleChange(index, e.target.value, e)}
            onKeyDown={(e) => {
              if (e.key === "Backspace" && index > 0 && !otp[index]) {
                e.preventDefault();
                inputs.current[index - 1].focus();
              }
            }}
            ref={(el) => (inputs.current[index] = el)}
          />
        ))}
      </div>
      <div className={styles["timer"]}>
        {timeIsUp ? <p className={styles["timeIs-up"]}>Your time is up!</p> : formatTime(timer)}
      </div>
    </div>
  );
};

export default EmailAuth;
