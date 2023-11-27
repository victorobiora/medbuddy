import styles from "./addFormStyles.module.css";
import Link from "next/link";
import svgObject from "@/styles/svgIcons";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { registerMedicationActions } from "@/store/generalStore";

const GetMedName = (props) => {
  const [text, setText] = useState("");
  const [textValid, setTextValid] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const buttonClass = textValid
    ? `${styles.button} ${styles.valid_button}`
    : `${styles.button}`;

  useEffect(() => {
    if (text.length > 2) {
      setTextValid(true);
    } else {
      setTextValid(false);
    }
  }, [text]);

  const updateMedTextHandler = (event) => {
    setText(event.target.value);
  };

  const nextPageHandler = () => {
    if (textValid) {
      dispatch(
        registerMedicationActions.updateMedicationData([
          {
            name: text,
          },
        ])
      );
      dispatch(
        registerMedicationActions.updateArrayData([
          {
            name: text,
          },
        ])
      );
      router.push("/patient/add/med-form");
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <h2>Add New Med</h2>
      </div>
      <form className={styles.form}>
        <div className={styles.form_input}>
          <div className={styles.med_name_svg}> {svgObject.pharmacy}</div>
          <input
            onChange={updateMedTextHandler}
            className={styles.med_name_input}
            type="text"
            placeholder="Enter name of medication here"
            name="drug_name"
          />
        </div>
      </form>

      <div className={styles.next_question}>
        <div className={buttonClass} onClick={nextPageHandler}>
          Next &gt;
        </div>
      </div>
    </section>
  );
};

export default GetMedName;
