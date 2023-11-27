import styles from "./HamBurger.module.css";
import svgObject from "@/styles/svgIcons";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { tokenActions } from "@/store/generalStore";

const HamBurgerComponent = (props) => {
  const dispatch = useDispatch()
  const router = useRouter();


  const logOutHandler = (event) => {
    dispatch(tokenActions.removeToken())
    router.push("/");
  };

  return (
    <section className={styles.container}>
      <main className={styles.hamburger_div}>
        <div onClick={props.removeHamburger}> X </div>
        <div className={styles.logo}>{svgObject.medbuddyBW}</div>
        <div className={styles.patients_heading}>Patients</div>
        <div className={styles.invite}>
          <div className={styles.shareApp}>{svgObject.invitePatient}</div>
          <div> Invite Patient</div>
        </div>
        <div className={styles.settings_heading}>
          <div className={styles.sub_settings}> Settings</div>
          <div>
            <div className={styles.shareApp}>{svgObject.whiteQuestion}</div>
            <div className={styles.sideBar_text}>Restart help tour</div>
          </div>
          <div>
            <div className={styles.shareApp}>{svgObject.shareApp}</div>
            <div className={styles.sideBar_text}>Share app</div>
          </div>
        </div>
        <div className={styles.log_out} onClick={logOutHandler}>
          <div className={styles.shareApp}>{svgObject.logOutDoor}</div>
          <div className={styles.logOut}>Log Out</div>
        </div>
      </main>
    </section>
  );
};

export default HamBurgerComponent;
