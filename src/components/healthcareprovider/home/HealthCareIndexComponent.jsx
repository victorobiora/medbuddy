import styles from "./HealthCareIndexComponent.module.css";
import svgObject from "@/styles/svgIcons";
import HealthPatientItem from "./HealthPatientItem";
import { useSelector } from "react-redux";
import { useState } from "react";
import HamBurgerComponent from "./HamBurgerComponent";
import Backdrop from "@/components/general/Backdrop";
import HealthTabsComponent from "../general/HealthTabsComponent";


const HealthCareIndexComponent = (props) => {
  const [showHamburger, setShowHamburger] = useState(false);
  const healthName = useSelector(state => state.healthCareProvider.healthRegisterData.name)
  const patientDummyData = [
    {
      name: "Olawunmi G",
      illness: "Malaria",
      imageNum: '1'
    },
    {
      name: "Anna. T",
      illness: "Tuberclosis",
      imageNum: '2'
    },
    {
      name: "Mrs. Samson",
      illness: "Myopia",
      imageNum: '3'
    },
    {
      name: "John. O",
      illness: "Whooping cough",
      imageNum: '4'
    },
  ];

  const updateHamburgerStateHandler = () => [
    setShowHamburger(false)
  ]

  return (
    <section className={styles.container}>
      {showHamburger && <HamBurgerComponent removeHamburger={updateHamburgerStateHandler}/>}
      {showHamburger && <Backdrop remove={updateHamburgerStateHandler}/>}
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
            <h4>Dr. {healthName}</h4>
          </div>
        </li>
        <li className={styles.notifications}>{svgObject.notification}</li>
      </ul>
      <h2 className={styles.my_patients}>Your Patients</h2>
      {patientDummyData.map((el) => {
        return <HealthPatientItem itemData={el} key={Math.random()} />;
      })}

    </section>
  );
};

export default HealthCareIndexComponent;
