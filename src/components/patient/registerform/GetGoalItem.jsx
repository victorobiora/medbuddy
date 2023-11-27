import { useEffect, useState } from "react";
import styles from "./FormStyles.module.css";

const GetGoalItem = ({ goal, distance, updateSelectedHandler }) => {
  const [checkedOption, setCheckedOption] = useState(false);

  const updateCheckedHandler = () => {
    setCheckedOption((prevState) => !prevState);
    console.log('shfjk')
  };

  useEffect(()=> {
     if(checkedOption){
        updateSelectedHandler()
     }
  }, [checkedOption])

  const checkedClass = checkedOption
    ? `${styles.goal_width_option} ${styles.goal_width_option_checked}`
    : `${styles.goal_width_option}`;

  return (
    <div className={styles.goal_width} onClick={updateCheckedHandler}>
      <div
        className={checkedClass}
        style={{
          left: `${distance}%`,
        }}
      >
        {goal}
      </div>
    </div>
  );
};

export default GetGoalItem;
