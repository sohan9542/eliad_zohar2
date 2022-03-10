import React, { useState } from "react";
import Home from "./pages/Home";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
import Step5 from "./pages/Step5";
import StepNo from "./pages/StepNo";
import Success from "./pages/Success";

const App = () => {
  const [page, setPage] = useState(1);
  const [idea, setIdea] = useState("");
  const [dev_budget, setDev_budget] = useState("");
  const [ppc_budget, setPpc_budget] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [utm, setUtm] = useState("");
  const postData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      idea: idea,
      dev_budget: dev_budget,
      ppc_budget: ppc_budget,
      name: name,
      phone: phone,
      utm: utm,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      process.env.REACT_APP_BASE_URI + "/syrrsgj441yxjf73bk279pd6r2hed4t6",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      {" "}
      {page === 1 && <Home setPage={setPage} />}{" "}
      {page === 2 && <Step1 setPage={setPage} />}{" "}
      {page === 3 && <StepNo setPage={setPage} />}{" "}
      {page === 4 && <Step2 setPage={setPage} idea={idea} setIdea={setIdea} />}{" "}
      {page === 5 && <Step3 setPage={setPage} setDev_budget={setDev_budget} />}{" "}
      {page === 6 && <Step4 setPage={setPage} setPpc_budget={setPpc_budget} />}{" "}
      {page === 7 && (
        <Step5
          setPage={setPage}
          setName={setName}
          setPhone={setPhone}
          name={name}
          phone={phone}
          postData={postData}
        />
      )}{" "}
      {page === 8 && <Success setPage={setPage} />}{" "}
    </>
  );
};

export default App;
