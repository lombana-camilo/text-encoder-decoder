import s from "./../styles/InputAndText.module.scss";
import b from "./../styles/buttons.module.scss";
const InputAndText = () => {
  return (
    <>
      <button className={b.fileButton}>Choose File</button>
      <div className={s.textareaContainer}>
        <textarea name="textarea"></textarea>
      </div>
    </>
  );
};

export default InputAndText;
