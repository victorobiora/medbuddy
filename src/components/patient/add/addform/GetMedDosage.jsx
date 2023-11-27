import styles from "./addFormStyles.module.css";
import svgObject from "@/styles/svgIcons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { registerMedicationActions } from "@/store/generalStore";


const GetMedDosage = (props) => {
  const selectedForm = useSelector(state => state.registerMedication.medData.medicine.form)
  const dosageText = () => {
    if(selectedForm === 'Tablet') {
      return 'mg'
    }else if(selectedForm === 'Capsule'){
      return 'mg'
    }else if(selectedForm === 'Solution'){
      return 'ml'
    }

    return ''
  }
    const [numValid, setNumValid] = useState(false);
    const [value, setValue] = useState(null);
    const router = useRouter();
    const dispatch = useDispatch()

    console.log(selectedForm)

    const buttonClass = numValid
    ? `${styles.button} ${styles.valid_button}`
    : `${styles.button}`;

    const updateDosageNumber = event => {
          setValue(event.target.value)
    }

    useEffect(() => {
         if(value > 0){
            setNumValid(true)
         }else {
            setNumValid(false)
         }
    }, [value])

    console.log(value)
    console.log(numValid)

    const nextPageHandler = () => {
      const stringValue = value.toString() + dosageText()
      console.log(stringValue)
      if(numValid){
        dispatch(registerMedicationActions.updateArrayData([{
          strength: stringValue
        }]))
     router.push('/patient/add/med-reason')      
      }

    }

  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="/patient/add/med-form" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
      </div>
      <form className={styles.form}>
        <div className={styles.svg}>{svgObject.pharmacy}</div>
        <h1>What strength is the med? ({dosageText()})</h1>
        <div className={styles.percent_svg}>{svgObject.thirtypercent}</div>

        <div className={styles.form_input}>
              <div className={styles.input_strength}>
                <input type="number" placeholder= "Enter dosage here" onChange={updateDosageNumber}/>
              </div>
    
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

export default GetMedDosage;
