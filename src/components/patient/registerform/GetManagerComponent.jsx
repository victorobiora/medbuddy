import svgObject from "@/styles/svgIcons";
import styles from './FormStyles.module.css'
import Link from "next/link";
import { useState } from "react";

const GetMangerComponent = (props) => {

  const [myHealthClass, setMyHealthClass] = useState(false)
  const [someoneHealthClass, setsHealthClass] = useState(false)

  const updateMyHealthClickedHandler = event => {
    setMyHealthClass(true)
    setsHealthClass(false)
  }
  const updateSomeoneHealthClickedHandler = event => {
    setMyHealthClass(false)
    setsHealthClass(true)
  }

  const healthClass = myHealthClass ? `${styles.option} ${styles.picked_option}`: `${styles.option}`
  const sHealthClass = someoneHealthClass  ? `${styles.option} ${styles.picked_option}`: `${styles.option}`

  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="/patient/registerform" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
      </div>
      <form className={styles.form}>
        <div className={styles.svg}>{svgObject.bioName}</div>
        <h1>Whose health are you managing?</h1>

        <div className={styles.percent_svg}>
          {svgObject.thirtypercent}
        </div>
        <div className={styles.form_input}>
          <div className={healthClass} onClick={updateMyHealthClickedHandler}>My Health</div>
          <div className={sHealthClass} onClick={updateSomeoneHealthClickedHandler}>Someone else's health</div>
        </div>
      </form>

      <div className={styles.next_question}>
        <Link href="/patient/registerform/gender-identity" className={`${styles.button} ${styles.valid_button}`}> Next &gt;</Link>
      </div>
    </section>
  );
};

export default GetMangerComponent;
