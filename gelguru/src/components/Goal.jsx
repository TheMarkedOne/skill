import styles from "../modules/goal.module.css";
import { useEffect, useState } from "react";
import MyDatePicker from "./DatePicker";
import trashIcon from "/images/trash.svg";

const Goal = (props) => {
  const [percentage, setPercentage] = useState(
    props.goalPercentages[props.index]
  );

  const mainStyle = {
    margin: 0,
    position: "relative",
    left: `${percentage * 10.8}px`,
    textAlign: "center",
    backgroundColor: "#f7931e",
    width: "27px",
    position: "relative",
    height: "22px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    borderRadius: "8px",
    fontSize: "18px",
  };

  return (
    <div className={styles.goal}>
      <div className={styles.inputArea}>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={props.description}
        ></textarea>
      </div>
      <div className={styles.goalsInfo}>
        <div className={styles.goalsInfoTitle}>
          <p className={styles.deadline}>{props.name}</p>
          <p>
            Total amount <span>gel {props.amount}</span>
          </p>
          <p className={styles.deadline}>{props.deadline}</p>
        </div>
        <div className={styles.sliderContainer}>
          <div style={mainStyle}>
            <p style={{ fontSize: "10px", margin: 0, color: "white" }}>
              {percentage}%
            </p>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={percentage}
            // onChange={handleSliderChange}
            className={styles.slider}
          />
        </div>
        <div className={styles.goalsInfoFooter}>
          <p>
            Amount Saved <span>gel {props.saved}</span>
          </p>
          <div className={styles['remaining-p']}>
            Remaining amount
            {!props.isHovered && (
              <span className={styles.leftAmount}>gel {props.remaining}</span>
            )}
            {props.isHovered && (
              <div className={styles["trash-modal"]}>
                <img src={trashIcon} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* {props.isHovered && (
        <div className={styles["trash-modal"]}>
          <img src={trashIcon} alt="" />
        </div>
      )} */}
      <button
        className={styles["save-buttonn"]}
        onMouseEnter={() => props.setIsHovered(true)}
        onMouseLeave={() => props.setIsHovered(false)}
        onClick={() => {
          props.setIndexToDelete(props.index), props.deleteModal();
        }}
      >
        delete
      </button>
      {/* //props.deleteHandler(props.index) */}
    </div>
  );
};

export default Goal;
