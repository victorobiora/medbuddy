import HistoryItem from "../general/HistoryItem";
import { useSelector } from "react-redux";
import MedSnippetCard from "../general/MedSnippetCard";
import ActiveMedsItem from "./ActiveMedsItem";

const ActiveMedsComponent = (props) => {
  const activeMeds = useSelector(state => state.patientData.data.activeMeds);
  console.log(activeMeds)

  return (
    <>
      {activeMeds.map((el) => {
        return <ActiveMedsItem item={el}/>
      })}
    </>
  );
};

export default ActiveMedsComponent;
