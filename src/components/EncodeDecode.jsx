import s from "../styles/EncodeDecode.module.scss";
import b from "../styles/buttons.module.scss";

const EncodeDecode = ({encode, decode}) => {
  return (
    <div className={s.buttonsContainer}>
      <button className={b.primaryButton} onClick={()=>encode()}>Encode</button>
      <button className={b.secondaryButton} onClick={()=>decode()}>Decode</button>
    </div>
  );
};

export default EncodeDecode;
