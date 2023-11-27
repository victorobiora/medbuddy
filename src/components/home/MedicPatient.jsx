import svgObject from "@/styles/svgIcons";
import styles from "./OnBoardingComponent.module.css";
import Link from "next/link";

const MedicPatient = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.exit}>
        <Link href= '/' className={styles.exit_button}>X</Link>
      </div>
      <main className={styles.onBoarding_details_choose}>
        <div className={styles.onBoarding_svg}>{svgObject.oldPersonHelped}</div>
        <div className={styles.onBoarding_text}>
          <h2>How would you like MedBuddy to help you?</h2>
          <p>
          Choose who you will be using MedBuddy as
          </p>
        </div>
      </main>
      <div className={styles.choose_profile}>
        <Link href="/healthcareprovider/registerform">Medical-Practitioner</Link>
      </div>
      <div className={styles.choose_profile}>
        <Link href="create-profile"> Patient</Link>
      </div>
    </section>
  );
};

export default MedicPatient;
