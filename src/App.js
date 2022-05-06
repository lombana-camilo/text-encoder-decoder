import "./App.scss";
import Logo from "./components/Logo.jsx";
import InputAndText from "./components/InputAndText.jsx";
import NotFound from "./components/NotFound.jsx";
import Output from "./components/Output.jsx";
import EncodeDecode from "./components/EncodeDecode.jsx";
import { useRef, useState } from "react";

function App() {
  const [file, setFile] = useState([]);
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const textAreaRef = useRef(null);
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
    setOutput(window.btoa(text));
  };

  const decode = () => {
    if (file.name) {
      reader.readAsText(file);
      reader.window.onload = () =>
        setOutput(() => {
          return window.atob(reader.result);
        });
    }
    setOutput(window.atob(output));
  };

  const copyText = () => {
      textAreaRef.current.select()
      navigator.clipboard.writeText(textAreaRef.current.value)
   };

  return (
    <>
      <Logo />
      <InputAndText onType={onType} onUpload={onUpload} text={text} />
      {text ? <Output output={output} copyText={copyText} textAreaRef={textAreaRef}/> : <NotFound />}
      <EncodeDecode encode={encode} decode={decode} />
    </>
  );
}

export default App;
