import styles from "./addFormStyles.module.css";
import svgObject from "@/styles/svgIcons";
import Link from "next/link";
import MedFrequencyItem from "./MedFrequencyItem";

const GetMedFrequency = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="/patient/add/med-duration" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
      </div>
      <form className={styles.form}>
        <div className={styles.svg}>{svgObject.pharmacy}</div>
        <h1>How long would you take it?</h1>
        <div className={styles.percent_svg}>{svgObject.fiftyPercent}</div>

        <div className={styles.form_input}>
          <ul className={styles.medform_list}>
            <MedFrequencyItem valueNum="1" text="Once a Day." />
            <MedFrequencyItem valueNum="2" text="Twice a Day." />
            <MedFrequencyItem valueNum="3" text="3 times a Day." />
            <li>
              <Link href="/under-construction">
                <div className={styles.medform_list_item}>
                  <div>X times a day</div>
                </div>
                <div> &gt;</div>
              </Link>
            </li>
            <li>
              <Link href="/under-construction">
                <div className={styles.medform_list_item}>
                  <div>Every X hours</div>
                </div>
                <div> &gt;</div>
              </Link>
            </li>
          </ul>
        </div>
      </form>
    </section>
  );
};

export default GetMedFrequency;
