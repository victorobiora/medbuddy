import classes from "./LoginComponent.module.css";
import svgObject from "@/styles/svgIcons";
import styles from "../patient/registerform/FormStyles.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { tokenActions } from "@/store/generalStore";
import { emailChecker } from "../patient/registerform/GetEmailAndPass";
import { TailSpin } from "react-loader-spinner";

const LoginComponent = (props) => {
  const [showEmailError, setShowEmailError] = useState(false);
  const [dataIsFetching, setDataisFetching] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [formValid, setFormValid] = useState(false);

  const buttonClass = formValid
    ? `${styles.button} ${styles.valid_button} ${classes.loginButton}`
    : `${styles.button} ${classes.loginButton}`;

  useEffect(() => {
    //Here, we check the validity of the two inputs to determine if button should be disabled
    if (emailChecker(loginDetails.email) && loginDetails.password.length > 7) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [loginDetails]);

  console.log(loginDetails);

  const setGoBackHandler = () => {
    if (token === '') {
      router.push("/");
    } else {
      router.back();
    }
  };

  const updateEmailHandler = (event) => {
    const value = event.target.value.trim();
    if (!emailChecker(value) || value.length === 0) {
      setShowEmailError(true);
    } else {
      setShowEmailError(false);
    }
    setLoginDetails((prevState) => ({
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
    setLoginDetails((prevState) => ({
      ...prevState,
      password: value,
    }));
  };

  const loginHandler = async () => {
    //Here, Since it is the next Question, we make the http request to register the new user
    if (formValid) {
      setDataisFetching(true);
      try {
        const registerRequest = await fetch(`/api/login`, {
          method: "POST",
          body: JSON.stringify(loginDetails),
        });

        if (!registerRequest.ok) {
          // we handle the error if bad status code comes
          const errorData = await registerRequest.json();
          throw new Error(errorData.error || "Something went wrong");
        }

        console.log(registerRequest.status);

        const response = await registerRequest.json();
        console.log(response);

   dispatch(tokenActions.updateToken(response.data.data.token))
        //Navigate to the regComplete page upon completion
        router.push("/patient/home");
      } catch (err) {
        console.log(err);
        router.push("/");
      }
    }
  };
  return (
    <section className={styles.container}>
   {!dataIsFetching &&  <div className={styles.back} onClick={setGoBackHandler}>
        <div className={styles.back_button}>{svgObject.goBack}</div>
      </div>}  
      {dataIsFetching && (
        <div className={styles.loading_spinner}>
          <TailSpin
            color="#066dfe"
            height="50"
            width="50"
            ariaLabel="tail-spin-loading"
            visible={true}
          />
        </div>
      )}
      {!dataIsFetching && (
        <div>
          <div className={classes.home_svg}>
            <div>{svgObject.medBuddyLogo}</div>
          </div>
          <div>
            <div className={classes.login_prompt}>
              <h1>Log In</h1>
            </div>

            <div className={styles.form_input}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
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
                type="password"
                id="password"
                placeholder="Enter your password here"
                onChange={updatePasswordHandler}
              />
              {showPasswordError && (
                <div className={styles.error_message}>
                  password should be longer than seven characters
                </div>
              )}
              <div className={classes.get_started}>
                {" "}
                Don't have an account yet?{" "}
                <Link href="/create-profile">Get Started</Link>
              </div>
            </div>
          </div>

          <div className={styles.next_question}>
            <div onClick={loginHandler} className={buttonClass}>
              Log In &gt;
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LoginComponent;
