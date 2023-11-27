import styles from "./SelectedAdherenceReport.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Link from "next/link";
import svgObject from "@/styles/svgIcons";
import { useEffect } from "react";

const SelectedAdherenceReport = (props) => {
  const [imagePath, setImagePath] = useState([ {
    num: '2',
    path: '/images/image-2.png'
  }])
  const patientData = useSelector(
    (state) => state.healthCareProvider.selectedPatient
  );
  console.log(patientData);

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

useEffect(() => {
      setImagePath(imageRoutesObject.filter(el => el.num === patientData.imageNum))
}, [])



console.log(imagePath)

  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="/healthcareprovider/home" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
        <div className={styles.title}>
          <h3>Patient Adherence</h3>
        </div>
      </div>
      <div className={styles.patientName}>
        <div><img src={imagePath[0].path}/></div>
        <h4>{patientData.name}</h4>
      </div>
    <div className={styles.adherence_item}>{svgObject.adherenceFrameOneSvg}</div>
    <div className={styles.adherence_item}>{svgObject.adherenceFrameTwoSvg}</div>
    <div className={styles.chatIcon}>
<Link href='' className={styles.chat_box}>
    {svgObject.chatBox}
</Link>
    </div>
    </section>
  );
};

export default SelectedAdherenceReport;
