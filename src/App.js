import "./App.scss";
import Logo from "./components/Logo.jsx";
import InputAndText from "./components/InputAndText.jsx";
import NotFound from "./components/NotFound.jsx";
import Output from "./components/Output.jsx"
import EncodeDecode from "./components/EncodeDecode.jsx";
import { useState } from "react";

function App() {
   const [isError,setError] = useState()
  return (
    <>
      <Logo />
      <InputAndText />
      {/* <NotFound /> */}
         <Output/>
      <EncodeDecode />
    </>
  );
}

export default App;
