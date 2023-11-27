import styles from "./ErrorComponent.module.css";
import svgObject from "@/styles/svgIcons";
import { useRouter } from "next/router";

const UnderConstructionComponent = (props) => {
    const router = useRouter()

const goBackHandler = () => {
    router.back()
}

  return (
    <section className={styles.container}>
      <div className={styles.back} onClick={goBackHandler}>
        <div className={styles.back_button}>
          {svgObject.goBack}
        </div>
      </div>
      <div className={styles.container_inner}>
        <div className={styles.medBuddyLogo}>{svgObject.medBuddyLogo}</div>
        <h3>Page under construction</h3>
        <div className={styles.errorSvg}>{svgObject.constructionSvg}</div>
      </div>
    </section>
  );
};

export default UnderConstructionComponent;