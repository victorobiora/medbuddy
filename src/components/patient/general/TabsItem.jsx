import styles from "./TabsComponent.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const TabsItem = (props) => {
  const router = useRouter();
  const currentPath = router.pathname;

  const activeTabClass = currentPath.includes(props.setPath)
    ? ` ${styles.tab_name} ${styles.activeColor} `
    : styles.tab_name;
  const activeSvgColor = currentPath.includes(props.setPath)
    ? "#066DFE"
    : "#8F8F8F";
  return (
    <Link href={props.setPath}>
      <div className={styles.tab_svg}>{props.setSvg(activeSvgColor)}</div>
      <p className={activeTabClass}>{props.tabName}</p>
    </Link>
  );
};

export default TabsItem;
