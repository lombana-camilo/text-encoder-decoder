import s from "./../styles/InputAndText.module.scss";
import b from "./../styles/buttons.module.scss";

const InputAndText = ({ onUpload, onType, text }) => {

  return (
    <>
      <label className={b.fileButton}>
        <input type="file" style={{display:"none"}} onChange={(e)=>onUpload(e.target.files[0])}/> Choose File
      </label>
      <div className={s.textareaContainer}>
        <textarea placeholder="Start typing here, or upload a file..." onChange={(e)=>onType(e.target.value)} value={text}>
            </textarea>
      </div>
    </>
  );
};

export default InputAndText;
