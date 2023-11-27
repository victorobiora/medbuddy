import IndexComponent from "@/components/patient/home/IndexComponent";
import TabsComponent from "@/components/patient/general/TabsComponent";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { patientDataActions } from "@/store/generalStore";
import { useSelector } from "react-redux";

const patientPage = () => {
  const token = useSelector(state => state.token.token)
  const router = useRouter();
  const dispatch = useDispatch();
  const [fetchingData, setFetchingData] = useState(true);


  useEffect(() => {
    const getPatientData = async () => {
      //For there to be a token, that means a user is signed In
      //We then use said token to make the call
      //Remember, localStorage ALWAYS returns a string in this case
      //If there is no such item, localST returns 'undefined'. It is a string
      if (token !== '') {
        setFetchingData(true);
        try {
          //Fetch Name of Patient
          const patientRequest = await fetch(`/api/get-patient`, {
            method: "GET",
            headers: {
              token,
            },
          });

          if (!patientRequest.ok) {
            // we handle the error if bad status code comes
            const errorData = await patientRequest.json();
            throw new Error(errorData.error || "Something went wrong");
          }


          const patientResponse = await patientRequest.json();
          console.log(patientResponse);

          //Fetch Patient Meds
          const registerRequest = await fetch(`/api/home-request`, {
            method: "GET",
            headers: {
              token,
            },
          });

          if (!registerRequest.ok) {
            // we handle the error if bad status code comes
            const errorData = await registerRequest.json();
            throw new Error(errorData.error || "Something went wrong");
          }
          
          const response = await registerRequest.json();
          console.log(response);

          //We then structure the data recieved
          const newAllMeds = response.data.data.map((el) => ({
            name: el.name,
            strength: el.medicine.strength,
            form: el.medicine.form,
            comment: el.comment,
            isActive: el.is_active,
            treatment: el.treatment,
            startDate: new Date(el.start_date).toLocaleString("en-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
          }));

          const newActiveMeds = response.data.data.map((el) => {
            if (el.is_active) {
              return {
                name: el.name,
                strength: el.medicine.strength,
                form: el.medicine.form,
                comment: el.comment,
                isActive: el.is_active,
                treatment: el.treatment,
                startDate: new Date(el.start_date).toLocaleString("en-CA", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                }),
              };
            }
          });

          const patientName = patientResponse.data.data.fullname;

          console.log(patientName, newAllMeds, newActiveMeds);

          //we then update PatientData state
          dispatch(
            patientDataActions.updatePatientData({
              name: patientName,
              allMeds: newAllMeds,
              activeMeds: newActiveMeds,
            })
          );

          //remove spinner upon completion
          setFetchingData(false);
        } catch (err) {
          console.log(err);
          router.push("/error");
        }
      } else {
        // we send them back to the login page
        router.push("/");
      }
    };

    getPatientData();
  }, []);

  return (
    <>
      {fetchingData && (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TailSpin
            color="#066dfe"
            height="30"
            width="30"
            ariaLabel="tail-spin-loading"
            visible={true}
          />
        </div>
      )}
      {!fetchingData && (
        <>
        
          <IndexComponent />
          <TabsComponent />
        </>
      )}
    </>
  );
};

export default patientPage;
