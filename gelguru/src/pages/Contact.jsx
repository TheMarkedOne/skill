import styles from "../modules/contact.module.css";
import returnIcon from "/images/return.svg";
import { useNavigate } from "react-router-dom";
import logoIcon from "/images/logo.svg"
import userIcon from "/images/user.svg"
import attributeIcon from "/images/attribute.svg"
import rightIcon from "/images/right.svg"


const Contact = () => {
  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate("/home/main");
  };


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
        <img
          src={returnIcon}
          alt=""
          className={styles["expensesLogo"]}
          onClick={handleReturnClick}
        />
        <h4 className={styles["expensesTitle"]}>Contact Us</h4>
        <div className={styles['inputBox1']}>
          <div className={styles['contactbox1']}><p>Your Name</p></div>
          <input type="text" className={styles["nameInput"]} />
        </div>
        <div className={styles['inputBox2']}>
          <div className={styles['contactbox2']}><p>Email</p></div>
          <input type="text" className={styles["email"]} />
        </div>
        <div className={styles['inputBox3']}>
          <div className={styles['contactbox3']}><p>Message</p></div>
          <textarea name="" id="" cols="30" rows="10" className={styles['Message']}></textarea>
        </div>
        <button className={styles['contactButton']}>Send</button>
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
            <p onClick={()=>navigateHandler('expenses')}>How It Works</p>
            <p onClick={()=>navigateHandler('safety')}>Safety & Confidentiality</p>
            <p>Contact</p>
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

export default Contact;
