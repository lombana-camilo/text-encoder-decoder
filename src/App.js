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
  const [encodedText, setEncodedText] = useState("");
  let reader = new FileReader();

  const onType = (inputText) => {
    if (inputText) {
      setText(inputText);
    } else {
      setText("");
      setEncodedText("");
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
      reader.onload = () => setEncodedText(reader.result.split(",")[1]);
      setFile([]);
      return;
    }
    setEncodedText(btoa(text));
  };
  return (
    <>
      <Logo />
      <InputAndText onType={onType} onUpload={onUpload} text={text} />
      {text ? <Output output={encodedText} /> : <NotFound />}
      <EncodeDecode encode={encode} />
    </>
  );
}

export default App;
