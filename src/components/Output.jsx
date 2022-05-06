import s from "./../styles/Output.module.scss"
import b from "./../styles/buttons.module.scss"

const Output = ({output, copyText, textAreaRef}) => {
   return (
      <div className={s.outputText}>
         <textarea defaultValue={output} ref={textAreaRef}></textarea>
         <button className={b.copyButton} onClick={()=>copyText()} >Copy Text</button>
      </div>
   )
}

export default Output
