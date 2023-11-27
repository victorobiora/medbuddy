import styles from "./addFormStyles.module.css";
import svgObject from "@/styles/svgIcons";
import Link from "next/link";
import { registerMedicationActions } from "@/store/generalStore";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const GetMedParameters = (props) => {
  const chosenDrug = useSelector(state => state.registerMedication.medData.name);
  const drugStrength = useSelector(state => state.registerMedication.medData.medicine.strength);

  console.log(chosenDrug, drugStrength)
    const router = useRouter();
    const dispatch = useDispatch()

    const routeToCommentsHandler = () => {
      dispatch(registerMedicationActions.updateTotalDosage(1))
        router.push('/patient/add/med-comments');

    };

    const routeToLengthHandler = () => {
        router.push('/patient/add/med-length')
    }

  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="/patient/add/med-frequency" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
        <h2>Add New Meds</h2>
      </div>
      <form className={styles.form}>
        <div className={styles.svg}>{svgObject.blueBottle}</div>
        <h1>{chosenDrug} {drugStrength}</h1>
        <div className={styles.percent_svg}>{svgObject.seventypercent}</div>
        <div className={styles.warning_svg}>{svgObject.almostDoneSvg}</div>

        <div className={styles.form_input}>
          <ul className={styles.medform_list}>
            <li onClick={routeToLengthHandler}>
              <div className={styles.medform_list_item}>
                <div className={styles.medform_svg}>{svgObject.calendarSvg()}</div>
                <div>Set Treatment duration</div>
              </div>
              <div> &gt;</div>
            </li>
            <li onClick={routeToCommentsHandler}>
              <div className={styles.medform_list_item}>
                <div className={styles.medform_svg}>{svgObject.instructionsSvg}</div>
                <div>Add Instructions</div>
              </div>
              <div> &gt;</div>
            </li>
          </ul>
        </div>
      </form>
    </section>
  );
};

export default GetMedParameters;
