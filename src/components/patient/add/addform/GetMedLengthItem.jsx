import styles from "./addFormStyles.module.css";

const GetMedLengthItem = (props) => {

  return (
    <li onClick={() => {
        props.clickFunction(props.days)
    }}>
      <div className={styles.medform_list_item}>
        <div>{props.text}</div>
      </div>
      <div> &gt;</div>
    </li>
  );
};

export default GetMedLengthItem;
