import styles from "./PatientHistoryComponent.module.css";
import Link from "next/link";
import HistoryItem from "../general/HistoryItem";
import { useSelector } from "react-redux";

const PatientHistoryComponent= (props) => {
  const medications = useSelector(state => state.patientData.data.allMeds);

  return (
    <main className={styles.history_container}>
      <div className={styles.history_container_text}>
        <h3>History</h3>
        <Link href='/'> See all</Link>
      </div>
      {medications.map((el) => {
        return <HistoryItem data={el} key={Math.random() * 1000}/>
      })}
    </main>
  );
};

export default PatientHistoryComponent;
