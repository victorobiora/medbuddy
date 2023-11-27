import styles from "./addFormStyles.module.css";
import Link from "next/link";
import svgObject from "@/styles/svgIcons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import MedTimeItem from "./MedTimeItem";
import { registerMedicationActions } from "@/store/generalStore";
import { useEffect, useState } from "react";

const GetMedTime = (props) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const numOfDailyDosage = useSelector(
    (state) => state.registerMedication.medData.daily_dosage
  );
  const [arrayOfTime, setArrayOfTime] = useState([{
    number: 0,
    dosageText: 'First',
    timeData: {
      hours: 0,
      minutes: 0,
    },
  }]);

  
  const buttonClass =`${styles.button} ${styles.valid_button}`



  useEffect(() => {
    setArrayOfTime((prevState) => {
      const newArrayOfTime = [];
      for (let index = 0; index < numOfDailyDosage; index++) {
        const dosageText = index === 0 ? "First" : "Next";
        newArrayOfTime.push({
          number: index,
          dosageText,
          timeData: {
            hours: 0,
            minutes: 0,
          },
        });
      }
      return newArrayOfTime;
    });
  }, []);

  const nextPageHandler = event => {

    const finalTimeArray = arrayOfTime.map(el => {
      const formattedHour = String(el.timeData.hours).padStart(2, '0');
      const formattedMinute = String(el.timeData.minutes).padStart(2, '0');

      const timeSet = `${formattedHour}:${formattedMinute}:00`

      return timeSet;
    });

    console.log(finalTimeArray);

  dispatch(registerMedicationActions.updateMedicationData([{
      dosage_times : finalTimeArray
    }]))

    router.push('/patient/add/med-parameters')


  }

  const updateMinutes = (valObj) => {
    if (valObj.value < 59) {
      setArrayOfTime((prevState) => {
        const filteredArray = prevState.filter(
          (el) => el.number !== valObj.indexNum
        );
        const toBeChangedArray = prevState.filter(
          (el) => el.number === valObj.indexNum
        );
        const updatedObject = {
          number: toBeChangedArray[0].number,
          dosageText: toBeChangedArray[0].dosageText,
          timeData: {
            hours: toBeChangedArray[0].timeData.hours,
            minutes: valObj.value,
          },
        };
        filteredArray.push(updatedObject);
        const newArray = [...filteredArray].sort((a, b) => a.number - b.number);
        return newArray;
      });
    }
  };

  const updateHours = (valObj) => {
    if (valObj.value < 25) {
      setArrayOfTime((prevState) => {
        const filteredArray = prevState.filter(
          (el) => el.number !== valObj.indexNum
        );
        const toBeChangedArray = prevState.filter(
          (el) => el.number === valObj.indexNum
        );
        const updatedObject = {
          number: toBeChangedArray[0].number,
          dosageText: toBeChangedArray[0].dosageText,
          timeData: {
            hours: valObj.value,
            minutes: toBeChangedArray[0].timeData.minutes,
          },
        };
        filteredArray.push(updatedObject);
        const newArray = [...filteredArray].sort((a, b) => a.number - b.number);
        return newArray;
      });
    }
  };

  console.log(numOfDailyDosage);
  console.log(arrayOfTime);

  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="/patient/add/med-frequency" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
        <h2>Add New Meds</h2>
      </div>
      <form className={styles.form}>
        <div className={styles.svg}>{svgObject.pharmacy}</div>
        <h1>Set the time for each dosage (24H Format)</h1>
        <div className={styles.percent_svg}>{svgObject.seventypercent}</div>
        <div className={styles.form_input}>
          {arrayOfTime.map((el) => {
            return (
              <MedTimeItem
                object={el}
                updateHours={updateHours}
                updateMinutes={updateMinutes}
              />
            );
          })}
        </div>
      </form>

 
      <div className={styles.next_question}>
        <div onClick={nextPageHandler} className={buttonClass}>
          Next &gt;
        </div>
      </div>
    </section>
  );
};

export default GetMedTime;
