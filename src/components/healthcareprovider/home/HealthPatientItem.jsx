import styles from "./HealthPatientItem.module.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { healthCareProviderActions } from "@/store/generalStore";

const HealthPatientItem = ({ itemData }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const imageRoutesObject =[ {
    num: "1",
    path: "/images/image-1.png",

  }
  , {
    num: '2',
    path: '/images/image-2.png'
  }
  , {
    num: '3',
    path: '/images/image-3.png'
  }
  , {
    num: '4',
    path: '/images/image-4.png'
  }
];

  const adherenceRouteHandler = (event) => {
    dispatch(healthCareProviderActions.updateSelectedPatient(itemData));
    router.push("/healthcareprovider/home/adherence-report");
  };

  const imagePath = imageRoutesObject.filter(el => el.num === itemData.imageNum);

  console.log(imagePath)
  
  console.log(itemData.imageNum);

  return (
    <section className={styles.container} onClick={adherenceRouteHandler}>
      <div className={styles.patient_image}>
        <img src={imagePath[0].path} />
      </div>
      <div className={styles.textContainer}>
        <div>
          <div>
            <h4>{itemData.name}</h4>
            <p>{itemData.illness} patient</p>
          </div>
        </div>

        <div className={styles.click}>click to see {itemData.name}</div>
      </div>
      <div className={styles.go_icon}>&gt;</div>
    </section>
  );
};

export default HealthPatientItem;
