import styles from "./addFormStyles.module.css";
import svgObject from "@/styles/svgIcons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { registerMedicationActions } from "@/store/generalStore";

const GetMedFormComponent = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const updateDrugFormHandler = (event) => {
    const drugform = event.target.dataset.drugform
    dispatch(registerMedicationActions.updateArrayData([{
      form : drugform
    }]))
    router.push('/patient/add/med-dosage')
  };

  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="/patient/add" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
        <h2>Add New Meds</h2>
      </div>
      <form className={styles.form}>
        <div className={styles.svg}>{svgObject.pharmacy}</div>
        <h1>What form is the med?</h1>
        <div className={styles.percent_svg}>{svgObject.twentyPercent}</div>

        <div className={styles.form_input}>
          <ul className={styles.medform_list}>
            <li onClick={updateDrugFormHandler} data-drugform="Tablet">
              <div className={styles.medform_list_item}>
                <div className={styles.medform_svg}>{svgObject.tablets}</div>
                <div>Tablet</div>
              </div>
              <div> &gt;</div>
            </li>
            <li onClick={updateDrugFormHandler} data-drugform="Solution">
              <div className={styles.medform_list_item}>
                <div className={styles.medform_svg}>{svgObject.solution}</div>
                <div>Solution</div>
              </div>
              <div> &gt;</div>
            </li>
            <li onClick={updateDrugFormHandler} data-drugform="Capsule">
              <div className={styles.medform_list_item}>
                <div className={styles.medform_svg}>{svgObject.capsule}</div>
                <div>Capsule</div>
              </div>
              <div> &gt;</div>
            </li>
            <li>
              <Link href="/under-construction">
                <div className={styles.medform_list_item}>
                  <div className={styles.medform_svg}>{svgObject.needle}</div>
                  <div>Others</div>
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

export default GetMedFormComponent;
