import svgObject from "@/styles/svgIcons";
import styles from "./HomeComponent.module.css";
import Link from "next/link";

const HomeComponent = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.hospital_image}>
        {svgObject.medbuddyHome}
        <div className={styles.shadow}></div>
      </div>
      <div className={styles.med_name}>
  {svgObject.medBuddyLogo}
      </div>
      <div className={styles.get_started}>
        <Link href="medic-patient"> Get Started</Link>
      </div>
      <div className={styles.logIn_prompt}>Already have an account? <Link href='/login'> Log In</Link></div>
    </section>
  );
};

export default HomeComponent;
