import React, { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
const NewForm = () => {
  const [step, setStep] = useState(1);
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
