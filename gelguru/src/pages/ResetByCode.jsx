// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import styles from "../modules/reset.module.css";
// import guruIcon from "/assets/guru.png"


// const ResetByCode = () => {
//   const [countdown, setCountdown] = useState(120);

//   useEffect(() => {
//     if (countdown === 0) return;

//     const intervalId = setInterval(() => {
//       setCountdown((prevCountdown) => prevCountdown - 1);
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [countdown]);

//   const minutes = Math.floor(countdown / 60);
//   const seconds = countdown % 60;

//   return (
//     <div className={styles['whole-loginContainer']}>
//       <div className={styles.bg}></div>
//       <div className={styles["login-container"]}>
//         <div className={styles["left-side"]}>
//           <div className={styles.logo}>
//             <Link to={"/signin"}>
//               <div className={styles.img}>
//                 <img src={guruIcon} alt="logo" />
//               </div>
//             </Link>
//             <Link to={"/signin"}>
//               <h2 className={styles["main-name"]}>
//                 G<span>el</span>G<span>uru</span>
//               </h2>
//             </Link>
//           </div>
//         </div>
//         <div className={styles["right-side"]}>
//           <div className={styles["input-group"]}>
//             <div className={styles.progres}>
//               <div className={styles.line}></div>
//               <div className={styles.line}></div>
//               <div className={styles.line}></div>
//             </div>
//             <p className={styles["sent-code"]}>
//               We have sent an authorization code to your email. Enter it below.
//             </p>
//             <div className={styles["input-code"]}>
//               {[...Array(6)].map((_, index) => (
//                 <div className={styles["div-for-code"]} key={index}></div>
//               ))}
//             </div>
//             <p className={styles.timer}>
//               {minutes}:{seconds}
//             </p>

//             <Link to={"/newpass"}>
//               <button className={styles["next-btn"]}>Next</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetByCode;
