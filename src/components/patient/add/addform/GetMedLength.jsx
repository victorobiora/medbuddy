import styles from "./addFormStyles.module.css";
import svgObject from "@/styles/svgIcons";
import GetMedLengthItem from "./GetMedLengthItem";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { registerMedicationActions } from "@/store/generalStore";

const GetMedLength = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const updateLengthHandler = (number) => {
    const days = parseInt(number);
    dispatch(registerMedicationActions.updateTotalDosage(days));
    router.push("/patient/add/med-comments");
  };

  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="/patient/add/med-parameters" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
        <h2>Add New Meds</h2>
      </div>
      <form className={styles.form}>
        <div className={styles.svg}>{svgObject.calendarSvg()}</div>
        <h1>How long is your treatment?</h1>
        <div className={styles.percent_svg}>{svgObject.hundredpercent}</div>

        <div className={styles.form_input}>
          <ul className={styles.medform_list}>
            <GetMedLengthItem
              days="5"
              clickFunction={updateLengthHandler}
              text="5 days"
            />
            <GetMedLengthItem
              days="7"
              clickFunction={updateLengthHandler}
              text="1 week"
            />
            <GetMedLengthItem
              days="15"
              clickFunction={updateLengthHandler}
              text="15 days"
            />
            <li>
              <Link href="/under-construction">
                <div className={styles.medform_list_item}>
                  <div>Set number of days</div>
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

export default GetMedLength;
