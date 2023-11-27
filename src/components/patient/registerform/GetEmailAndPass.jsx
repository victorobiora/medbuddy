import svgObject from "@/styles/svgIcons";
import styles from "./FormStyles.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { registerPatientActions } from "@/store/generalStore";
import { useSelector } from "react-redux";

export const emailChecker = (val) => {
  if (
    val.length > 4 &&
    val.includes(`@`) &&
    val.includes(`.`, val.indexOf(`@`)) &&
    val.lastIndexOf(".") > val.lastIndexOf("@") &&
    val.lastIndexOf(".") !== val.length - 1
  ) {
    return true;
  } else {
    return false;
  }
};

const GetEmailAndPass = (props) => {
  const p = useSelector((state) => state.registerPatient);
  const dispatch = useDispatch();
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const router = useRouter();
  const [emailAndPassDetails, setEmailAndPassDetails] = useState({
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
      emailChecker(emailAndPassDetails.email) &&
      emailAndPassDetails.password.length > 7
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [emailAndPassDetails]);

  console.log(emailAndPassDetails);

  const updateEmailHandler = (event) => {
    const value = event.target.value.trim();
    if (!emailChecker(value) || value.length === 0) {
      setShowEmailError(true);
    } else {
      setShowEmailError(false);
    }
    setEmailAndPassDetails((prevState) => ({
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
    setEmailAndPassDetails((prevState) => ({
      ...prevState,
      password: value,
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
            email: emailAndPassDetails.email,
          },
          {
            password: emailAndPassDetails.password,
          },
        ])
      );
      //Navigate to the next page
      router.push("/patient/registerform/medbuddy-goals");
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="/patient/registerform/date-of-birth" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
      </div>
      <form className={styles.form}>
        <div className={styles.svg}>{svgObject.emailSvg}</div>
        <h1>Enter email and password!</h1>
        <div className={styles.percent_svg}>{svgObject.seventypercent}</div>
        <div className={styles.percent_svg}>{svgObject.enterEmail}</div>
        <div className={styles.form_input}>
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

export default GetEmailAndPass;
