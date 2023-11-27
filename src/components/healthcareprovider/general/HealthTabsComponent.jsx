import svgObject from "@/styles/svgIcons";
import styles from "./HealthTabsComponent.module.css";
import HealthTabItem from "./HealthTabItemComponent";

const HealthTabsComponent = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.tabsList}>
        <HealthTabItem
          setPath="/healthcareprovider/home"
          tabName="Home"
          setSvg={svgObject.tabsHome}
        />
        <HealthTabItem
          setPath="/under-construction"
          tabName="calendar"
          setSvg={svgObject.calendarSvg}
        />
        <HealthTabItem
          setPath="/under-construction"
          tabName="Add Patient"
          setSvg={svgObject.tabsAdd}
        />
        <HealthTabItem
          setPath="/under-construction"
          tabName="Messages"
          setSvg={svgObject.tabsMessages}
        />
        <HealthTabItem
          setPath="under-construction"
          tabName="Profile"
          setSvg={svgObject.tabsProfile}
        />
      </ul>
    </section>
  );
};

export default HealthTabsComponent;
