import svgObject from "@/styles/svgIcons";
import styles from "./ActiveMedsItem.module.css";

const ActiveMedsItem = ({ item }) => {
  return (
    <section className={styles.container}>
      <div className={item.form === 'Solution' ? styles.solution_svg :  styles.image_svg}>
        {item.form === 'Solution' ? svgObject.blackSolution : svgObject.tablets}
      </div>
      <div className={styles.drug_name}>
        <div className={styles.name}> {item.name} </div>
        <div> {item.treatment}</div>
      </div>
      <div className={styles.dosage}>{item.strength}</div>
    </section>
  );
};

export default ActiveMedsItem;
