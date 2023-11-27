import svgObject from "@/styles/svgIcons";
import styles from "./SearchComponent.module.css";

const SearchComponent = (props) => {
  return (
    <main className={styles.container}>
      <form>
        <div className={styles.search_field}>
          <input type="text" placeholder="Search Meditation" />
          <div className={styles.search_icon}>{svgObject.search}</div>
        </div>
      </form>
    </main>
  );
};

export default SearchComponent;
