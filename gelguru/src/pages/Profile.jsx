import React from "react";
import styles from "../modules/profile.module.css";
import returnIcon from "/images/return.svg";
import { useNavigate } from "react-router-dom";
import userIcon from "/images/userview.svg";
import { useEffect, useState } from "react";
import { forgotPasswordApi } from "../api/api";
import toast from "react-hot-toast";
import { useAuth } from "../context/useAuth";
import { useForm } from "react-hook-form";
import { useChangeImage } from "../hooks/useChangeImage";

const Profile = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [changePassword, setChangePassword] = useState(false);
  const [email, setEmail] = useState('')
  const { user, image } = useAuth()
  const { register, handleSubmit } = useForm()
  const { uploadImage, isUploading } = useChangeImage()

  useEffect(() => {
    if (showModal === true) {
      document.body.style.backgroundColor = "grey";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [showModal]);


  const changeHandler = () => {
    setChangePassword(!changePassword);
  };

  const handleFileUpload = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  const handleReturnClick = () => {
    navigate("/home/main");
  };

  const handleModalShow = () => {
    setShowModal(!showModal);
  };

  const navigateHandler = (url) => {
    navigate(`/home/${url}`);
  };


  async function handleSubmitForm(e) {
    e.preventDefault();
    try {
      const newData = {
        email: email,
        new_password: inputValue,
      };

      console.log(newData);
      const change = await forgotPasswordApi(newData);
      if (change) {
        toast.success('Password changed successfully');
      }
    } catch (error) {
      console.error("Error while changing password:", error);
      toast.error('Failed to change password. Please try again.');
    }
  }


  async function onSubmit(data) {
    const image = data.image[0]
    console.log(image)

    const file = await uploadImage(image)
    if (file) {
      console.log('upload')
    }
  }

  console.log(image && image)

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <div className={styles.logoSide}>
          <img src="/images/logo.svg" alt="" />
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
          <p>Hello, {user?.first_name ? user?.first_name : 'User'}</p>
          <div>
            <img src="/images/user.svg" alt="" className={styles.userImg} />
            <img
              src="/images/attribute.svg"
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
        <div className={styles["userInformation"]}>
          <img style={{ borderRadius: '100%' }} src={image?.photo?.image ? image?.photo.image : userIcon} alt="" />

          <h4>{user ? user.first_name.slice(0, 1).toUpperCase() + user.first_name.slice(1) + ' ' + user.last_name.slice(0, 1).toUpperCase() + user.last_name.slice(1) : 'User name'}</h4>
        </div>
        <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)}>
          <input type="file" accept="image, image/jpeg" placeholder="Upload Image" {...register('image', {
            required: 'This Field is Required'
          })} />

          <button type="submit" style={{ padding: '5px', borderRadius: '20px', marginTop: '8px' }} >
            {isUploading ? 'loading...' : 'Upload'}
            upload Image
          </button>
        </form>
        <div className={styles["emailSide"]}>
          <h4>Email:</h4>
          <h4>{user ? user.email : 'user@example.com'}</h4>
        </div>
        <div className={styles["passwordSide"]}>
          {changePassword && <h4>Password:</h4>}
          {/* {!changePassword && <h4>abcd_1234</h4>} */}
          {changePassword && (
            <div className={styles["passwordChangeBox"]}>
              <form onSubmit={handleSubmitForm}>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className={styles['changeInput']}
                />

                <input
                  type="password"
                  placeholder="New Password"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                  className={styles['changeInput']}
                />
                <button type='submit' className={styles['changeButton']}>Change</button>
              </form>
              <div>
                <div className={styles["conditions"]}>
                  <div className={styles["firstConditions-row"]}>
                    <div
                      className={`${styles["condition-box"]} ${styles["correct"]}`}
                    >
                      <img
                        src={
                          inputValue.length >= 8
                            ? "/images/correct.svg"
                            : "/images/notcorrect.svg"
                        }
                        alt=""
                      />
                      <p>At least 8 characters</p>
                    </div>
                    <div
                      className={`${styles["condition-box"]} ${styles["correct"]}`}
                    >
                      <img
                        src={
                          /[A-Z]/.test(inputValue)
                            ? "/images/correct.svg"
                            : "/images/notcorrect.svg"
                        }
                        alt=""
                      />
                      <p>At least 1 capital letter</p>
                    </div>
                  </div>
                  <div className={styles["secondConditions-row"]}>
                    <div
                      className={`${styles["condition-box"]} ${styles["incorrect"]}`}
                    >
                      <img
                        src={
                          /\d/.test(inputValue)
                            ? "/images/correct.svg"
                            : "/images/notcorrect.svg"
                        }
                        alt=""
                      />
                      <p>At least 1 digit</p>
                    </div>
                    <div
                      className={`${styles["condition-box"]} ${styles["incorrect"]}`}
                    >
                      <img
                        src={
                          /[^A-Za-z0-9]/.test(inputValue)
                            ? "/images/correct.svg"
                            : "/images/notcorrect.svg"
                        }
                        alt=""
                      />
                      <p>At least 1 special character</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {!changePassword && <p onClick={changeHandler}>change password</p>}
      </div>
      <div className={styles.footer}>
        <div className={styles.footerLogo}>
          <img src="/images/logo.svg" alt="" />
          <h1>
            <span>G</span>el<span>G</span>uru
          </h1>
        </div>
        <div className={styles.footerText}>
          <div className={styles.footerTitle}>
            <p>How It Works</p>
            <p onClick={() => navigateHandler("safety")}>
              Safety & Confidentiality
            </p>
            <p onClick={() => navigateHandler("contact")}>Contact</p>
          </div>
          <div className={styles.rights}>
            <img src="/images/right.svg" alt="" />
            <p>SkillTeam. All Rights Reserved.</p>
          </div>
        </div>
        <div className={styles.whiteSubject}></div>
      </div>
    </div >
  );
};

export default Profile;
