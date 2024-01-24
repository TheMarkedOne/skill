const Passwd = () => {
    return(
        <div className={styles['passwordChangeBox']}>
            <div>
              <input
                type="text"
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
              <button>change</button>
            </div>
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
    )
}