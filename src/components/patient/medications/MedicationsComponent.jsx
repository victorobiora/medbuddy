import { useState } from "react";
import styles from "./MedicationsComponent.module.css";
import ActiveMedsComponent from "./ActiveMedsComponent";
import InactiveMedsComponent from "./InactiveMedsComponent";

const MedicationComponent = (props) => {
  const [active, setActive] = useState("active");

  const ActiveClass = (arg) =>
    active === arg
      ? `${styles.header_item} ${styles.active_class}`
      : `${styles.header_item}`;

  const loadActiveComponent = (event) => {
    setActive("active");
  };

  const loadInactiveComponent = (event) => {
    setActive("inactive");
  };

  return (
    <section className={styles.container}>
      <ul className={styles.header_bar}>
        <li className={ActiveClass("active")} onClick={loadActiveComponent}>
          Active
        </li>
        <li className={ActiveClass("inactive")} onClick={loadInactiveComponent}>
          InActive
        </li>
      </ul>

      {active === "active" && <ActiveMedsComponent />}
      {active !== "active" && <InactiveMedsComponent />}
    </section>
  );
};

export default MedicationComponent;
