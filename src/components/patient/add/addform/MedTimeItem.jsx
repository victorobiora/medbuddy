import styles from "./MedTimeItem.module.css";
import { useState } from "react";

const MedTimeItem = ({object, updateMinutes, updateHours}) => {

  return (
    <section className={styles.med_time_container}>
      <div className={styles.med_time_dosage}>
        <h3> {object.dosageText} Dosage</h3>
      </div>
      <div className={styles.input_container}>
        <div className={styles.time_item}>
          <label htmlFor="hour">
            <h4>Hour</h4>
          </label>
          <div>
            <input
              value={ object.timeData.hours}
              type="number"
              id="hour"
              min="1"
              max="24"
              onChange={(event)=>{
               updateHours({
                    value: event.target.value,
                    indexNum: object.number
                })
              }}
            />
          </div>
        </div>
        <div className={styles.dot}>
          <h3>:</h3>
        </div>
        <div className={styles.time_item}>
          <label htmlFor="minute">
            <h4>Minute</h4>
          </label>

          <div>
            <input
              value={object.timeData.minutes}
              type="number"
              id="minute"
              min="1"
              max="59"
              onChange={(event)=>{
                console.log(event.target.value)
             updateMinutes({
                value: event.target.value,
                indexNum: object.number
            })
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedTimeItem;
