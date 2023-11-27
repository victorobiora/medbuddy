import styles from "./addFormStyles.module.css";
import svgObject from "@/styles/svgIcons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { registerMedicationActions } from "@/store/generalStore";

const GetMedReason = (props) => {
  const [textValid, setTextValid] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const buttonClass = textValid
    ? `${styles.button} ${styles.valid_button}`
    : `${styles.button}`;

  const updateReason = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (value.length > 1) {
      setTextValid(true);
    } else {
      setTextValid(false);
    }
  }, [value]);

  const nextPageHandler = () => {
    if (textValid) {
      dispatch(registerMedicationActions.updateMedicationData([{
        treatment: value
      }]))
      router.push("/patient/add/med-duration");
    }
  };


  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="/patient/add/med-dosage" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
      </div>
      <form className={styles.form}>
        <div className={styles.svg}>{svgObject.pharmacy}</div>
        <h1>What are you taking it for?</h1>
        <div className={styles.percent_svg}>{svgObject.thirtypercent}</div>

        <div className={styles.form_input}>
          <div className={styles.input_strength}>
            <input
              type="text"
              placeholder="Enter why you are taking it"
              onChange={updateReason}
            />
          </div>
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

export default GetMedReason;
