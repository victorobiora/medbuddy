import styles from './addFormStyles.module.css'
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { registerMedicationActions } from "@/store/generalStore";

const MedFrequencyItem = props => {
    const dispatch = useDispatch();
    const router = useRouter();
  
    const updateDurationHandler = (event) => {
     const value = parseInt(props.valueNum) 

      dispatch(registerMedicationActions.updateMedicationData([{
        daily_dosage : value
      }]))
      router.push('/patient/add/med-time')
  
    };

    return  <li onClick={updateDurationHandler} >
    <div className={styles.medform_list_item}>
      <div>{props.text}</div>
    </div>
    <div> &gt;</div>
  </li>
}

export default MedFrequencyItem;