import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../modules/Signin.module.css"; // Import your CSS module
import { useLogin } from "../hooks/useLogin";
import { useAuth } from "../context/useAuth";

const Signin = () => {
  const navigate = useNavigate()
  const { mutate, isPending } = useLogin()
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const { loginUser } = useAuth()

  useEffect(() => {
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  }, []);


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  async function handleSignin(e) {
    e.preventDefault()
    const loginData = {
      email, password
    }
    loginUser(loginData)
    navigate('/home/main')
  }

  return (
    <div className={styles["signInBox"]}>
      <div className={styles.bg}></div>
      <div className={styles["login-container"]}>
        <div className={styles["left-side"]}>
          <div className={styles.logo}>
            <div className={styles.img}>
              <img src="/assets/guru.png" alt="logo" />
            </div>
            <h2 className={styles["main-name"]}>
              G<span>el</span>G<span>uru</span>
            </h2>
          </div>
        </div>
        <form onSubmit={handleSignin} className={styles["right-side"]}>
          <div className={styles["input-group"]}>
            <p className={styles["sign-in"]}>Sign In</p>
            <div className={`${styles["input-email"]} ${styles.box}`}>
              <div className={styles["form-group"]}>
                <input
                  className={`${styles.input} ${styles.email}`}
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label
                  className={`${styles.label} ${styles["email-label"]}`}
                  htmlFor="email"
                >
                  Email
                </label>
              </div>
            </div>
            <div className={`${styles["input-email"]} ${styles.box}`}>
              <div className={styles["form-group"]}>
                {showPassword ? (
                  <img
                    className={styles.visibility_off}
                    src="/assets/visibility_off.png"
                    alt=""
                    onClick={handleTogglePassword}
                  />
                ) : (
                  <img
                    className={styles.visibility}
                    src="/assets/visibility.png"
                    alt=""
                    onClick={handleTogglePassword}
                  />
                )}
                <input
                  className={`${styles.input} ${styles.password}`}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  className={`${styles.label} ${styles["email-label"]}`}
                  htmlFor="password"
                >
                  Password
                </label>
              </div>
            </div>
            <div className={styles["remember-forgot"]}>
              <div className={styles["chack-div"]}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  name="checkbox"
                />
                <label className={styles["label-check"]} htmlFor="checkbox">
                  Remember Password?
                </label>
              </div>

              <Link to={"/reset"}>
                <p className={styles.forgot}>Forgot Password?</p>
              </Link>
            </div>
            <div className={styles["btn-div"]}>
              <button type='submit' className={styles.btn}>{isPending ? 'Loading...' : 'Go To Homepage'}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
