import React, { useState, useContext, useEffect } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import { ListingContext } from "../../../Context/ListingContext";
const NewForm = () => {
  const [step, setStep] = useState(1);
  const { setListing } = useContext(ListingContext);
  useEffect(() => {
    setListing({});
  }, []);

  return (
    <>
      {step === 1 ? (
        <FirstStep setStep={setStep} />
      ) : step === 2 ? (
        <SecondStep setStep={setStep} />
      ) : step === 3 ? (
        <ThirdStep setStep={setStep} />
      ) : null}
    </>
  );
};

export default NewForm;
