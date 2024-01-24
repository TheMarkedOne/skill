import styles from "../modules/expenses.module.css";
import returnIcon from "/images/return.svg";
import { useNavigate } from "react-router-dom";
import rightIcon from "/images/right.svg"
import logoIcon from "/images/logo.svg"
import userIcon from "/images/user.svg"
import attributeIcon from "/images/attribute.svg"



const Expenses = () => {
  
    const navigate = useNavigate()

    const handleReturnClick =() => {
        navigate('/home/main')
    }

    const navigateHandler = (url) => {
      navigate(`/home/${url}`)
    }

    return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logoSide}>
          <img src={logoIcon} alt="" />
          <h1>
            <span>G</span>el<span>G</span>uru
          </h1>
        </div>
        <div className={styles.headerTitle}>
          <div>
            <p>Income & Expenses</p>
            <div className={styles.orangeBar}></div>
          </div>
          <div>
            <p>Goals</p>
            <div className={styles.orangeBar2}></div>
          </div>
        </div>
        <div className={styles.userSide}>
          <p>Hello, User</p>
          <div>
            <img src={userIcon} alt="" className={styles.userImg} />
            <img
              src={attributeIcon}
              alt=""
              className={styles.attribute}
            />
          </div>
        </div>
      </div>
      <div className={styles["expenses"]}>
        <img src={returnIcon} alt="" className={styles["expensesLogo"]} onClick={handleReturnClick} />
        <h4 className={styles["expensesTitle"]}>
          How to Manage Your Income and Expenses
        </h4>
        <p className={styles["expensesText"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className={styles["expensesText"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h4 className={styles["expensesTitle"]}>
          How to Monitor the Achievement of Your Financial Goals
        </h4>
        <p className={styles["expensesText"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className={styles["expensesText"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerLogo}>
          <img src={logoIcon} alt="" />
          <h1>
            <span>G</span>el<span>G</span>uru
          </h1>
        </div>
        <div className={styles.footerText}>
          <div className={styles.footerTitle}>
            <p>How It Works</p>
            <p onClick={()=>navigateHandler('safety')}>Safety & Confidentiality</p>
            <p onClick={()=>navigateHandler('contact')}>Contact</p>
          </div>
          <div className={styles.rights}>
            <img src={rightIcon} alt="" />
            <p>SkillTeam. All Rights Reserved.</p>
          </div>
        </div>
        <div className={styles.whiteSubject}></div>
      </div>
    </div>
  );
};

export default Expenses;
