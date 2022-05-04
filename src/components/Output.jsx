import s from "./../styles/Output.module.scss"
import b from "./../styles/buttons.module.scss"

const Output = ({output}) => {
   return (
      <div className={s.outputText}>
         <textarea defaultValue={output}></textarea>
         <button className={b.copyButton}>Copy Text</button>
      </div>
   )
}

export default Output
