import "./App.scss";
import Logo from "./components/Logo.jsx";
import InputAndText from "./components/InputAndText.jsx";
import NotFound from "./components/NotFound.jsx";
import Output from "./components/Output.jsx";
import EncodeDecode from "./components/EncodeDecode.jsx";
import { useState } from "react";

function App() {
  const [file, setFile] = useState([]);
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  let reader = new FileReader();

  const onType = (inputText) => {
    if (inputText) {
      setText(inputText);
    } else {
      setText("");
      setOutput("");
    }
  };

  const onUpload = (file) => {
    // console.log(file)
    if (!file) return;
    setFile(file);
    reader.readAsText(file);
    reader.onload = () => setText(reader.result);
  };

  const encode = () => {
    if (file.name) {
      reader.readAsDataURL(file);
      reader.onload = () => setOutput(reader.result.split(",")[1]);
      setFile([]);
      return;
    }
    setOutput(btoa(text));
  };

  const decode = () => {
      if (file.name) {
        reader.readAsText(file) 
         reader.onload = ()=> setOutput(()=>{
            return atob(reader.result)
         })
      }
    setOutput(atob(output));
  };

  return (
    <>
      <Logo />
      <InputAndText onType={onType} onUpload={onUpload} text={text} />
      {text ? <Output output={output} /> : <NotFound />}
      <EncodeDecode encode={encode} decode={decode} />
    </>
  );
}

export default App;
