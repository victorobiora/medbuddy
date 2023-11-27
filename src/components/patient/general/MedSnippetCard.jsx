import svgObject from "@/styles/svgIcons";
import styles from "./MedicationSnippetComponent.module.css";
import Backdrop from "@/components/general/Backdrop";
import MedicationSnippetItem from "./MedicationSnippetItem";
import { useState } from "react";


const MedSnippetCard = ({el}) => {
    const [showMedItem, setShowMedItem] = useState(false);

    const showShowMedItem = () => {
        setShowMedItem(true);
      };
    
     const  removeShowMedItem = () => {
        setShowMedItem(false);
      };
    

   return <>
      {showMedItem && <Backdrop remove={removeShowMedItem} />}
      {showMedItem && <MedicationSnippetItem item = {el} remove={removeShowMedItem}/>}
    <div  onClick={showShowMedItem}
        
              className={
                el.form === "Solution"
                  ? styles.med_card
                  : `${styles.med_card} ${styles.red_pill}`
              }
            >
              <div className={styles.drug_image}>
                <div>
                  {el.form === "Solution" ? svgObject.bottle : svgObject.pills}
                </div>
              </div>
              <div className={styles.drug_details}>
                <h2 className={styles.drug_name}>{el.name}</h2>
                <p>
                  <span>{el.strength} </span>
                  <span>{el.comment}</span>
                </p>
              </div>
            </div>
   </>
}


export default MedSnippetCard;