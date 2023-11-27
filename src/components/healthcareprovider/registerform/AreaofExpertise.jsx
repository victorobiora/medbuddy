import styles from "../../../components/patient/add/addform/addFormStyles.module.css";
import classes from "./AreaofExpertise.module.css";
import Link from "next/link";
import svgObject from "@/styles/svgIcons";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

const AreaofExpertise = (props) => {
  const [dataIsFetching, setDataIsFetching] = useState(false);
  const [text, setText] = useState("");
  const [textValid, setTextValid] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const buttonClass = textValid
    ? `${styles.button} ${styles.valid_button}`
    : `${styles.button}`;

  useEffect(() => {
    if (text.length > 2) {
      setTextValid(true);
    } else {
      setTextValid(false);
    }
  }, [text]);

  const updateExpertiseTextHandler = (event) => {
    setText(event.target.value);
  };

  const nextPageHandler = () => {
    if (textValid) {
      setDataIsFetching(true);
      setTimeout(() => {
        router.push("/healthcareprovider/home");
      }, 2000);
    }
  };

  return (
    <section className={styles.container}>
      {dataIsFetching && (
        <div className={styles.loading_spinner}>
          <TailSpin
            color="#066dfe"
            height="60"
            width="60"
            ariaLabel="tail-spin-loading"
            visible={false}
          />
        </div>
      )}
      {!dataIsFetching && (
        <>
          <div className={styles.back}>
            <Link
              href="/healthcareprovider/registerform"
              className={styles.back_button}
            >
              {svgObject.goBack}
            </Link>
          </div>
          <form className={styles.form}>
            <div className={styles.form_input}>
              <div className={classes.area_svg}> {svgObject.doctorSvg}</div>
              <h1>What is your area of medical expertise?</h1>
              <div> {svgObject.hundredpercent}</div>
              <input
                onChange={updateExpertiseTextHandler}
                className={classes.area_input}
                type="text"
                placeholder="Enter area of Expertise here"
                name="area-expert"
              />
            </div>
          </form>
          <div className={styles.next_question}>
            <div className={buttonClass} onClick={nextPageHandler}>
              Done &gt;
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default AreaofExpertise;
