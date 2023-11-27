import styles from "./addFormStyles.module.css";
import svgObject from "@/styles/svgIcons";
import Link from "next/link";
import { useRouter } from "next/router";

const GetMedDuration = (props) => {
    const router = useRouter()

    const updateDurationHandler = event => { 
      //Logic only accepts for every day so we move past it.
      //to be updated later   
      router.push('/patient/add/med-frequency')
    }

  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="/patient/add/med-reason" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
      </div>
      <form className={styles.form}>
        <div className={styles.svg}>{svgObject.pharmacy}</div>
        <h1>How long would you take it?</h1>
        <div className={styles.percent_svg}>{svgObject.fiftyPercent}</div>

        <div className={styles.form_input}>
          <ul className={styles.medform_list}>
            <li onClick={updateDurationHandler}>
              <div className={styles.medform_list_item}>
                <div>Every day</div>
              </div>
              <div> &gt;</div>
            </li>
            <li>
              <Link href="/under-construction">
                <div className={styles.medform_list_item}>
                  <div>On a recurrent cycle</div>
                </div>
                <div> &gt;</div>
              </Link>
            </li>
            <li>
              <Link href="/under-construction">
                <div className={styles.medform_list_item}>
                  <div>Every X days</div>
                </div>
                <div> &gt;</div>
              </Link>
            </li>
            <li>
              <Link href="">
                <div className={styles.medform_list_item}>
                  <div>Every X weeks</div>
                </div>
                <div> &gt;</div>
              </Link>
            </li>
            <li>
              <Link href="">
                <div className={styles.medform_list_item}>
                  <div>Every X months</div>
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

export default GetMedDuration;
