import svgObject from "@/styles/svgIcons";
import styles from "./TabsComponent.module.css";
import TabsItem from "./TabsItem";

const TabsComponent = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.tabsList}>
        <TabsItem
          setPath="/patient/home"
          tabName="Home"
          setSvg={svgObject.tabsHome}
        />
        <TabsItem
          setPath="/patient/medication"
          tabName="Medication"
          setSvg={svgObject.tabsMeds}
        />
        <TabsItem
          setPath="/patient/add"
          tabName="Add"
          setSvg={svgObject.tabsAdd}
        />
        <TabsItem
          setPath="/under-construction"
          tabName="Messages"
          setSvg={svgObject.tabsMessages}
        />
        <TabsItem
          setPath="/under-construction"
          tabName="Profile"
          setSvg={svgObject.tabsProfile}
        />
      </ul>
    </section>
  );
};

export default TabsComponent;
