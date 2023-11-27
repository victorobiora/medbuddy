import styles from "./MedicationSnippetComponent.module.css";
import { useSelector } from "react-redux";
import MedSnippetCard from "./MedSnippetCard";

const MedicationSnippetComponent = (props) => {
  const medications = useSelector((state) => state.patientData.data.allMeds);
  console.log(medications);

  return (
    <>
      <main className={styles.med_container}>
        <div className={styles.med_container_text}>
          <h3>Ongoing Medication</h3>
        </div>
        {medications.map((el) => {
          return <MedSnippetCard el={el} key={Math.random() * 20000} />;
        })}
      </main>
    </>
  );
};

export default MedicationSnippetComponent;
