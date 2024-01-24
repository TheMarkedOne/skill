import React from "react";
import styles from "../modules/mainPage.module.css";
import { useEffect, useState } from "react";
import Goal from "../components/Goal";
import MyDatePicker from "../components/DatePicker";
import Chart from "../components/Chart";
import { useNavigate } from "react-router";
import logoutIcon from "/images/logout.svg";
import rightIcon from "/images/right.svg";
import addGoalIcon from "/images/addgoal.svg";
import logoIcon from "/images/logo.svg";
import userIcon from "/images/user.svg";
import attributeIcon from "/images/attribute.svg";
import { useAuth } from "../context/useAuth";

const MainPage = () => {
  const navigate = useNavigate()
  const [percentage, setPercentage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [deleteModalHandler, setDeleteModalHandler] = useState(false);
  const [userView, setUserView] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [mainPosition, setMainPosition] = useState(0);
  const [addGoalToggle, setAddGoalToggle] = useState(false);
  const [dateValue, setDateValue] = useState("");
  const [inputToggle, setInputToggle] = useState(Array(5).fill(false));
  const [goalPercentages, setGoalPercentages] = useState(Array(3).fill(0));
  const [inputValues, setInputValues] = useState(Array(6).fill({ value: "0" }));
  const [footerStyle, setFooterStyle] = useState({});
  const [ifYes, setIfYes] = useState(false);
  const [goals, setGoals] = useState([]);
  // const [greenStyle, setGreenStyle] = useState("");
  const [indexToDelete, setIndexToDelete] = useState(0);
  const { logoutUser, user } = useAuth()

  useEffect(() => {
    setMainPosition(percentage * 10.7);
    setInputValues((prevState) => {
      const newState = [...prevState];
      const totalAmount = Number(newState[1].value.trim());
      const calculatedSaved = (totalAmount * percentage) / 100;
      newState[3] = { value: calculatedSaved.toFixed(2) };
      newState[4] = { value: (totalAmount - calculatedSaved).toFixed(2) };
      return newState;
    });
  }, [percentage]);


  const userModalHandler = () => {
    setUserView(!userView);
  };

  const answerHandler = () => {
    setIfYes(!ifYes);
  };

  const deleteModal = () => {
    setDeleteModalHandler(!deleteModalHandler);
  };

  const navigateHandler = (url) => {
    navigate(`/home/${url}`);
  };

  const goalToggleHandler = () => {
    setAddGoalToggle(!addGoalToggle);
  };

  const dateHandler = (selectedDate) => {
    const formattedDate = selectedDate.toISOString().split("T")[0];
    setDateValue(formattedDate);
  };


  const getValueHandler = (e, index) => {
    e.preventDefault();
    const isBackspace = e.keyCode === 8;
    const isNumericString =
      !isNaN(Number(e.target.value)) ||
      (e.target.value !== "" && /^-?\d*\.?\d+$/.test(e.target.value));
    if (
      !isBackspace &&
      (index === 3 || index === 4 || index === 1) &&
      !isNumericString
    ) {
      window.alert("You can only enter numbers in salary fields");
      e.target.value = "";
    } else {
      setInputValues((prevState) => {
        const newState = [...prevState];
        newState[index] = { value: e.target.value };
        return newState;
      });
    }
  };

  const deleteHandler = (index) => {
    const newArr = goals.filter((element, i) => i !== index);
    setGoals(newArr);
    setDeleteModalHandler(false);
  };

  const financeHandler = (index) => {
    const full = parseInt(inputValues[1].value.trim());
    const now = parseInt(inputValues[3].value);
    const inputPercentage = parseInt(Math.floor((now * 100) / full));

    setGoalPercentages((prevState) => {
      const newArr = [...prevState];
      newArr[index] = inputPercentage;
      return newArr;
    });
  };

  const getTextAreaValue = (e) => {
    setTextAreaValue(e.target.value);
  };

  const addGoal = () => {
    if (inputValues.some((element) => element.value.trim() === "")) {
      window.alert("Please fill in all types of information");
    } else if (goals.length > 2) {
      window.alert("You can only have three financial goals");
    } else if (
      Number(inputValues[3].value) >= Number(inputValues[1].value.trim()) ||
      Number(inputValues[4].value) >= Number(inputValues[1].value.trim()) ||
      Number(inputValues[3].value) + Number(inputValues[4].value) !==
      Number(inputValues[1].value.trim())
    ) {
      window.alert("Please enter correct information");
    } else {
      setGoals([
        ...goals,
        {
          description: inputValues[5].value,
          name: inputValues[0].value,
          amount: inputValues[1].value,
          deadline: dateValue,
          saved: inputValues[3].value,
          remaining: inputValues[4].value,
        },
      ]);
      const newInputValues = Array(6).fill({ value: "0" });
      setInputValues(newInputValues);
      setAddGoalToggle(false)
      setPercentage(0);
      setInputToggle(Array(5).fill(false));
      setTextAreaValue("");
    }
  };

  const toggleHandler = (index) => {
    setInputToggle((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleSliderChange = (event) => {
    const newPercentage = event.target.value;
    setPercentage(newPercentage);
  };

  const mainStyle = {
    margin: 0,
    position: "relative",
    left: `${mainPosition}px`,
    textAlign: "center",
    backgroundColor: "#AFAFAF",
    width: "27px",
    position: "relative",
    height: "22px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    borderRadius: "8px",
    fontSize: "18px",
  };

  function handleLogout(e) {
    e.preventDefault()

    logoutUser()
    navigate('/signin')
  }

  return (
    <div className={styles.container}>
      {deleteModalHandler && (
        <div className={styles["delete-modal"]}>
          <p>Are u sure you want to perform the action</p>
          <div>
            <button
              onClick={() => {
                deleteHandler(indexToDelete);
              }}
            >
              Yes
            </button>
            <button onClick={deleteModal}>No</button>
          </div>
        </div>
      )}
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
          <p>Hello, {user?.first_name && user.first_name}</p>
          <div>
            <img
              src={userIcon}
              alt=""
              className={styles.userImg}
              onClick={userModalHandler}
            />
            <img
              src={attributeIcon}
              alt=""
              className={styles.attribute}
              onClick={userModalHandler}
            />
          </div>
        </div>
        {userView && (
          <div className={styles["profileModal"]}>
            <div onClick={() => navigateHandler("profile")}>
              <img src={userIcon} alt="" />
              <p>View Profile</p>
            </div>
            <div onClick={handleLogout}>
              <img src={logoutIcon} alt="" />
              <span>Log Out</span>
            </div>
          </div>
        )}
      </div>
      {/* <div className={styles.incomePlace}>
        <Chart />
      </div> */}
      <Chart deleteModal={deleteModal} />
      <div className={styles.goalSide}>
        <div className={styles.goalsHeader}>
          <div className={styles.goalsTitle}>
            <p>Financial Goals</p>
          </div>
          <div className={styles.addGoal} onClick={goalToggleHandler}>
            <p>Add Goal</p>
            <img src={addGoalIcon} alt="" />
          </div>
        </div>
        {addGoalToggle && (
          <div className={styles.goal}>
            <div className={styles.inputArea}>
              <textarea
                value={textAreaValue}
                name=""
                id=""
                cols="30"
                rows="10"
                onChange={(e) => {
                  getValueHandler(e, 5), getTextAreaValue(e);
                }}
              ></textarea>
            </div>
            <div className={styles.goalsInfo}>
              <div className={styles.goalsInfoTitle}>
                {inputToggle[0] ? (
                  <input
                    type="text"
                    className={styles.goalsInfoInput}
                    onChange={(e) => getValueHandler(e, 0)}
                  />
                ) : (
                  <p
                    onClick={(e) => {
                      toggleHandler(0);
                    }}
                  >
                    Write the name of goal
                  </p>
                )}
                {inputToggle[1] ? (
                  <input
                    type="text"
                    className={styles.goalsInfoInput}
                    onChange={(e) => getValueHandler(e, 1)}
                  />
                ) : (
                  <p
                    onClick={(e) => {
                      toggleHandler(1);
                    }}
                  >
                    indicate total amount needed
                  </p>
                )}
                {inputToggle[2] ? (
                  <MyDatePicker
                    dateHandler={dateHandler}
                    dateValue={dateValue}
                    dateValueHandler={setDateValue}
                  />
                ) : (
                  <p
                    onClick={(e) => {
                      toggleHandler(2);
                    }}
                  >
                    indicate deadline
                  </p>
                )}
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
                  onChange={handleSliderChange}
                  className={styles.slider}
                />
              </div>
              <div className={styles.goalsInfoFooter}>
                {inputToggle[3] ? (
                  <input
                    type="text"
                    value={inputValues[3].value}
                    className={styles.goalsInfoInput}
                    onChange={(e) => getValueHandler(e, 3)}
                  />
                ) : (
                  <p
                    onClick={(e) => {
                      toggleHandler(3);
                    }}
                  >
                    Indicate amount saved
                  </p>
                )}
                {inputToggle[4] ? (
                  <input
                    type="text"
                    value={inputValues[4].value}
                    className={styles.goalsInfoInput}
                    onChange={(e) => getValueHandler(e, 4)}
                  />
                ) : (
                  <p
                    onClick={(e) => {
                      toggleHandler(4);
                    }}
                  >
                    Indicate remaining amount
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={() => {
                addGoal(), financeHandler(goals.length);
              }}
              className={`${styles["save-button"]}`}
              key={Math.random()}
            >
              save
            </button>
          </div>
        )}
        {goals.map((item, index) => {
          return (
            <Goal
              description={item.description}
              name={item.name}
              index={index}
              goalPercentages={goalPercentages}
              amount={item.amount}
              deadline={item.deadline}
              saved={item.saved}
              remaining={item.remaining}
              key={index}
              deleteHandler={deleteHandler}
              deleteModal={deleteModal}
              setIsHovered={setIsHovered}
              isHovered={isHovered}
              setIndexToDelete={setIndexToDelete}
              ifYes={ifYes}
            />
          );
        })}
        {addGoalToggle && (
          <p className={styles.tip}>Click into the fields and type</p>
        )}
      </div>
      <div className={styles.footer} style={footerStyle}>
        <div className={styles.footerLogo}>
          <img src={logoIcon} alt="" />
          <h1>
            <span>G</span>el<span>G</span>uru
          </h1>
        </div>
        <div className={styles.footerText}>
          <div className={styles.footerTitle}>
            <p onClick={() => navigateHandler("expenses")}>How It Works</p>
            <p onClick={() => navigateHandler("safety")}>
              Safety & Confidentiality
            </p>
            <p onClick={() => navigateHandler("contact")}>Contact</p>
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

export default MainPage;
