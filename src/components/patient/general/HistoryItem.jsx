import styles from './HistoryItem.module.css'
import svgObject from "@/styles/svgIcons";

const HistoryItem = ({data}) => {
    return <div className={styles.history_item}>
    <div className={styles.specific_details}>
      <div className={styles.specific_title}>
        {data.treatment} Treatment
      </div>
      <div className={styles.specific_date}> {data.startDate}</div>
    </div>
    <div className={styles.threeDots}>{svgObject.threeDots}</div>
</div>;
}

export default HistoryItem;