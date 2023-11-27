import styles from "./PatientHomeComponent.module.css";
import svgObject from "@/styles/svgIcons";
import MedicationSnippetComponent from "../general/MedicationSnippetComponent";
import PatientHistoryComponent from "./PatientHistoryComponent";
import SearchComponent from "@/components/general/SearchComponent";
import { useState } from "react";
import PatientHamBurgerComponent from "./PatientHamBurger";
import { useSelector } from "react-redux";
import Backdrop from "@/components/general/Backdrop";

const PatientHomeComponent = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  const fullName = useSelector((state) => state.patientData.data.nameOfPatient);

  const updateHamburgerStateHandler = () => [setShowHamburger(false)];

  return (
    <section className={styles.container}>
      {showHamburger && (
        <PatientHamBurgerComponent
          removeHamburger={updateHamburgerStateHandler}
        />
      )}
      {showHamburger && <Backdrop remove={updateHamburgerStateHandler} />}

      <ul className={styles.welcome_container}>
        <div
          className={styles.hamBurger}
          onClick={() => {
            setShowHamburger(true);
          }}
        >
          {svgObject.hamBurgerSvg}
        </div>
        <li>
          <div className={styles.welcome_text}>
            <h3>Welcome!</h3>
          </div>
          <div className={styles.welcome_name}>
            <h4>{fullName}!</h4>
          </div>
        </li>
        <li className={styles.notifications}>{svgObject.notification}</li>
      </ul>
      <SearchComponent />
      <MedicationSnippetComponent />
      <PatientHistoryComponent />
    </section>
  );
};

export default PatientHomeComponent;
