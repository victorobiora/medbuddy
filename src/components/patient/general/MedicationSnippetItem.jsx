import styles from "./MedicationSnippetItem.module.css";
import svgObject from "@/styles/svgIcons";

const MedicationSnippetItem = ({ item, remove }) => {
  return (
    <section
      className={styles.med_container}
      style={{
        background: item.form === "Solution" ? "#C2DBFF" : "#ff8080",
      }}
    >
      <ul className={styles.top_list}>
        <li className={styles.svgsvg}>{svgObject.infoIcon}</li>
        <li>
          <div  className={styles.svgsvg}>{svgObject.smallDeleteSvg}</div>
          <div  className={styles.svgsvg}>{svgObject.editSwordSvg}</div>
        </li>
      </ul>
      <div
        className={styles.blue_container}
        style={{
          background: item.form === "Solution" ? "#066DFE" : "#E01A00",
        }}
      >
        <div className={styles.drug_header}>
          <div className={styles.drug_name_svg}>{svgObject.bottle}</div>
          <div>{item.name}</div>
        </div>
        <div className={styles.info_buttons}>
          <div className={styles.info_buttons_item}>
            <div>Scheduled for 7:35 PM, today.</div>
          </div>
          <div className={styles.info_buttons_item}>
            <div>
              {item.strength} {item.comment}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.action_buttons}>
        <div className={styles.action_buttons_item}  onClick={()=> {
          remove()
        }}>
          <div
            className={styles.check_or_skip}
            style={{
              background: item.form === "Solution" ? "#066DFE" : "#E01A00",
            }}
          >
            X
          </div>
          <div>Skip</div>
        </div>
        <div className={styles.action_buttons_item} onClick={()=> {
          remove()
        }}>
          <div
            className={styles.check_or_skip}
            style={{
              background: item.form === "Solution" ? "#066DFE" : "#E01A00",
            }}
          >
            &#10003;
          </div>
          <div>Take</div>
        </div>
      </div>
    </section>
  );
};

export default MedicationSnippetItem;

//name, form, time , dosage, comment
