import React from "react";
import { useNavigate} from "react-router-dom";
import { useState } from "react";
import Footer from "../components/layouts/Footer.jsx";
import Header from "../components/layouts/Header.jsx";
import styles from "../modules/landpage.module.css";
import logoguru from "/images/logoguru.svg";
import closeIcon from "/images/close.svg"
import copyrightIcon from "/images/copyright.svg"


const Home = () => {
  
  const [display, setDisplay] = useState([false, false])
  
  const modalHandler = (index) => {
    setDisplay((prevDisplay)=>{
      const newArr = [...prevDisplay]
      newArr[index] = !newArr[index]
      return newArr
    })
  }

  const navigate = useNavigate();

  return (
    <div className={styles.main}>
      {display[0] && <div className={styles['firstModal']}>
        <img src={closeIcon} alt="" onClick={()=>modalHandler(0)} />
        <h4>How to Manage Your Income and Expenses</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h4>How to Monitor the Achievement of Your Financial Goals</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>}
      {display[1] && <div className={styles['firstModal']}>
        <img src={closeIcon} alt="" onClick={()=>modalHandler(1)} />
        <h4>Safety and Confidentiality</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>}
      <div className={styles.header}>
        <div onClick={()=>modalHandler(0)}>How it Works</div>
        <div onClick={()=>modalHandler(1)}>Safety & Confidentiality</div>
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.logoDivParent}>
            <div>
              <img src={logoguru} alt="logo"></img>
            </div>
            <div className={styles.gelgurutext}>
              <div className={styles.yvelazemzeoba}>
                G<div className={styles.ertnairi}>el</div>G
                <div className={styles.ertnairi}>uru</div>
              </div>
            </div>
          </div>
          <div className={styles.uppertext}>
            <br />
            <h3>Manage Your Money with Ease and Comfort</h3>
          </div>
          <div className={styles.lefttext}>
            <br />
            <div>No. 1 website for tracking your finance and</div>
            <div>pursuing financial goals</div>
          </div>
          <div className={styles['copyright-box']}>
            <img src={copyrightIcon} alt="" />
            <p>2024 SkillTeam</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.welcome}>Welcome</div>
          <div className={styles.btndiv}>
            <button
              onClick={() => {
                navigate("/signin");
              }}
              className={styles.sign}
            >
              <p>Login</p>
            </button>
            <button
              onClick={() => {
                navigate("/signup");
              }}
              className={styles.sign}
            >
              <p>Register</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
