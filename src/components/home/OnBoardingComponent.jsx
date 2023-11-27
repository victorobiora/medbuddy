import svgObject from "@/styles/svgIcons";
import styles from "./OnBoardingComponent.module.css";
import Link from "next/link";

const OnBoardingComponent = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.exit}>
        <Link href= '/medic-patient' className={styles.exit_button}>X</Link>
      </div>
      <main className={styles.onBoarding_details}>
        <div className={styles.onBoarding_svg}>{svgObject.oldPersonHelped}</div>
        <div className={styles.onBoarding_text}>
          <h2>Your Journey to adequate wellbeing starts here.</h2>
          <p>
            Staying on top of your health is only a few taps away. Start by
            creating your profile for a personalized experience
          </p>
        </div>
      </main>
      <div className={styles.create_profile}>
        <Link href="/patient/registerform"> Create Profile</Link>
      </div>
    </section>
  );
};

export default OnBoardingComponent;
