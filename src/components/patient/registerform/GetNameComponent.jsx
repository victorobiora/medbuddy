import svgObject from "@/styles/svgIcons";
import styles from "./FormStyles.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { registerPatientActions } from "@/store/generalStore";
import { useSelector } from "react-redux";

const GetNameComponent = (props) => {
  const p = useSelector((state) => state.registerPatient);
  const dispatch = useDispatch();
  const router = useRouter();
  const [nameDetails, setNameDetails] = useState({
    firstname: "",
    lastname: "",
  });
  const [formValid, setFormValid] = useState(false);

  const buttonClass = formValid
    ? `${styles.button} ${styles.valid_button}`
    : `${styles.button}`;

  useEffect(() => {
    //Here, we check the validity of the two inputs to determine if button should be disabled
    if (nameDetails.firstname.length > 1 && nameDetails.lastname.length > 1) {
      setFormValid(true);
    }
  }, [nameDetails]);

  console.log(nameDetails);

  const updateFirstNameHandler = (event) => {
    const value = event.target.value.trim();
    setNameDetails((prevState) => ({
      ...prevState,
      firstname: value,
    }));
  };

  const updateLastNameHandler = (event) => {
    const value = event.target.value.trim();
    setNameDetails((prevState) => ({
      ...prevState,
      lastname: value,
    }));
  };

  console.log(p);
  const nextPageHandler = () => {
    //Here, we update the store with data from the validated form and then
    // programatically move to the next page
    if (formValid) {
      dispatch(
        registerPatientActions.updateRegisterData([
          {
            firstname: nameDetails.firstname,
          },
          {
            lastname: nameDetails.lastname,
          },
        ])
      );
      //Navigate to the next page
      router.push("/patient/registerform/manage-health");
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="/create-profile" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
      </div>
      <form className={styles.form}>
        <div className={styles.svg}>{svgObject.bioName}</div>
        <h1>Let's get to know you better!</h1>
        <h1> What's your name?</h1>
        <div className={styles.percent_svg}>{svgObject.twentyPercent}</div>
        <div className={styles.form_input}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            placeholder="Enter your first name"
            onChange={updateFirstNameHandler}
          />
          {/* Error for First name here*/}
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            placeholder="Enter your last name"
            onChange={updateLastNameHandler}
          />
          {/* Error for Last name here*/}
        </div>
      </form>

      <div className={styles.next_question}>
        <div onClick={nextPageHandler} className={buttonClass}>
          Next &gt;
        </div>
      </div>
    </section>
  );
};

export default GetNameComponent;
