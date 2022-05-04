import s from "../styles/EncodeDecode.module.scss";
import b from "../styles/buttons.module.scss";

const EncodeDecode = ({encode}) => {
  return (
    <div className={s.buttonsContainer}>
      <button className={b.primaryButton} onClick={()=>encode()}>Encode</button>
      <button className={b.secondaryButton}>Decode</button>
    </div>
  );
};

export default EncodeDecode;
