import svgObject from "@/styles/svgIcons";
import styles from "../../patient/registerform/FormStyles.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { healthCareProviderActions } from "@/store/generalStore";
import { emailChecker } from "@/components/patient/registerform/GetEmailAndPass";

const SignUpForm = (props) => {
  const dispatch = useDispatch();
  const [showEmailError, setShowEmailError] = useState(false);
  const [showNameError, setShowNameError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showConfirmPasswordError, setShowConfirmPasswordError] =
    useState(false);
  const router = useRouter();
  const [nameEmailAndPassDetails, setNameEmailAndPassDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formValid, setFormValid] = useState(false);

  const buttonClass = formValid
    ? `${styles.button} ${styles.valid_button}`
    : `${styles.button}`;

  useEffect(() => {
    //Here, we check the validity of the two inputs to determine if button should be disabled
    if (
      emailChecker(nameEmailAndPassDetails.email) &&
      nameEmailAndPassDetails.password.length > 7 &&
      nameEmailAndPassDetails.name.length > 2
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [nameEmailAndPassDetails]);

  console.log(nameEmailAndPassDetails);

  const updateConfirmPasswordHandler = (event) => {
    const value = event.target.value.trim();
    if (value !== nameEmailAndPassDetails.password) {
      setShowConfirmPasswordError(true);
    } else {
      setShowConfirmPasswordError(false);
    }
  };

  const updateEmailHandler = (event) => {
    const value = event.target.value.trim();
    if (!emailChecker(value) || value.length === 0) {
      setShowEmailError(true);
    } else {
      setShowEmailError(false);
    }
    setNameEmailAndPassDetails((prevState) => ({
      ...prevState,
      email: value,
    }));
  };

  const updatePasswordHandler = (event) => {
    const value = event.target.value.trim();
    if (value.length < 8 || value.length === 0) {
      setShowPasswordError(true);
    } else {
      setShowPasswordError(false);
    }
    setNameEmailAndPassDetails((prevState) => ({
      ...prevState,
      password: value,
    }));
  };

  const updateNameHandler = (event) => {
    const value = event.target.value.trim();
    if (value.length < 3 || value.length === 0) {
      setShowNameError(true);
    } else {
      setShowNameError(false);
    }
    setNameEmailAndPassDetails((prevState) => ({
      ...prevState,
      name: value,
    }));
  };

  const nextPageHandler = () => {
    //Here, we update the store with data from the validated form and then
     // programatically move to the next page
    if (formValid) {
      dispatch(healthCareProviderActions.updateHealthRegisterData(nameEmailAndPassDetails))   
    }    
     //Navigate to the next page
    router.push("/healthcareprovider/registerform/areaofexpertise");
  };

  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="/medic-patient" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
      </div>
      <div className={styles.signup_container}>
        <h1>Sign Up</h1>
      </div>
      <form className={styles.form}>
        <div className={styles.form_input}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name here"
            onChange={updateNameHandler}
          />

          {showNameError && (
            <div className={styles.error_message}>
              please enter a valid name
            </div>
          )}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email here"
            onChange={updateEmailHandler}
          />

          {showEmailError && (
            <div className={styles.error_message}>
              please enter a valid email
            </div>
          )}
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            placeholder="Enter your password here"
            onChange={updatePasswordHandler}
          />

          {showPasswordError && (
            <div className={styles.error_message}>
              password should be longer than seven characters
            </div>
          )}

          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="text"
            id="confirm-password"
            placeholder="Enter your password here"
            onChange={updateConfirmPasswordHandler}
          />

          {showConfirmPasswordError && (
            <div className={styles.error_message}>password does not match</div>
          )}
        </div>
      </form>

      <div className={styles.next_question}>
        <div onClick={nextPageHandler} className={buttonClass}>
          Sign Up &gt;
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
