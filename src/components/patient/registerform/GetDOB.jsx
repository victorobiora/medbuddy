import svgObject from "@/styles/svgIcons";
import styles from "./FormStyles.module.css";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { registerPatientActions } from "@/store/generalStore";

const GetDOB = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date(2005, 1, 1));
  const dispatch = useDispatch();
  const router = useRouter()
  const [formValid, setFormValid] = useState(true);

  const buttonClass = formValid
    ? `${styles.button} ${styles.valid_button}`
    : `${styles.button}`;

    const nextPageHandler = () => {
      
      //Here, we update the store with data from the validated form and then
      // programatically move to the next page
      if (formValid) {
        dispatch(
          registerPatientActions.updateRegisterData([
          {
            dob: selectedDate.toLocaleDateString('en-CA', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })
          }
          ])
        );
        //Navigate to the next page
        router.push("/patient/registerform/email");
      }
    };

    console.log(selectedDate)

  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="/patient/registerform/gender-identity" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
      </div>
      <form className={styles.form}>
        <div className={styles.svg}>{svgObject.birthday}</div>
        <h1>What is your date of birth?</h1>

        <div className={styles.percent_svg}>{svgObject.seventypercent}</div>
        <div className={styles.warning_svg}>{svgObject.birthdaywarning}</div>
        <div className={styles.form_input}>
          <section className={styles.DatePicker}>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy/MM/dd"
              maxDate = {new Date(2005, 0, 1)}
              showYearDropdown
              scrollableYearDropdown
              className={styles.calender_design}
              yearDropdownItemNumber={100}
              popperModifiers={[
                {
                  name: "offset",
                  options: {
                    offset: [-25, 0],
                  },
                },
                {
                  name: "preventOverflow",
                  options: {
                    rootBoundary: "viewport",
                    tether: false,
                    altAxis: true,
                  },
                },
              ]}
            />
          </section>
        </div>
      </form>

      <div className={styles.next_question}>
        <div className={buttonClass} onClick={nextPageHandler}> Next &gt;</div>
      </div>
    </section>
  );
};

export default GetDOB;
