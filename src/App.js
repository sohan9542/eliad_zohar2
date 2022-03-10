import React,{useState} from "react";
import Home from "./pages/Home";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
import Step5 from "./pages/Step5";
import StepNo from "./pages/StepNo";
import Success from "./pages/Success";

const App = () => {
  const [page, setPage] = useState(1)
  
  return (
    <>
     {page === 1 && <Home setPage={setPage}/>}
     {page === 2 && <Step1 setPage={setPage}/>}
     {page === 3 && <StepNo setPage={setPage}/>}
     {page === 4 && <Step2 setPage={setPage}/>}
     {page === 5 && <Step3 setPage={setPage}/>}
     {page === 6 && <Step4 setPage={setPage}/>}
     {page === 7 && <Step5 setPage={setPage}/>}
     {page === 8 && <Success setPage={setPage}/>}
    </>
  );
};

export default App;
