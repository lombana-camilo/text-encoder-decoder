import "./App.scss";
import Logo from "./components/Logo.jsx";
import InputAndText from "./components/InputAndText.jsx";
import NotFound from "./components/NotFound.jsx";
import Output from "./components/Output.jsx";
import EncodeDecode from "./components/EncodeDecode.jsx";
import { useRef, useState } from "react";

function App() {
  const [file, setFile] = useState([]);
  const [fileType, setFileType] = useState("");
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
    if (!file) return;
    setFileType(file.name.split(".")[1]);
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
      reader.onload = () =>
        setOutput(() => window.atob(reader.result));
    }
    setOutput(()=>window.atob(text));
  };

  const copyText = () => {
    textAreaRef.current.select();
    navigator.clipboard.writeText(textAreaRef.current.value);
  };

  const downFunction = () => {
    const downFile = new Blob([output], { type: "octet-stream" });
    const href = URL.createObjectURL(downFile);
    //create internal link
    const link = Object.assign(document.createElement("a"), {
      href,
      style: "display:none",
      download: `Encoded.${fileType || "txt"}`,
    });
    document.body.appendChild(link);
    link.click();
    //remove it from memory
    URL.revokeObjectURL(href);
    link.remove();
  };

  return (
    <>
      <Logo />
      <InputAndText onType={onType} onUpload={onUpload} text={text} />
      {text ? (
        <Output
          output={output}
          copyText={copyText}
          textAreaRef={textAreaRef}
          downFunction={downFunction}
        />
      ) : (
        <NotFound />
      )}
      <EncodeDecode encode={encode} decode={decode} />
    </>
  );
}

export default App;
