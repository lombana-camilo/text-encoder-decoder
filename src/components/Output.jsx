import s from "./../styles/Output.module.scss"
import b from "./../styles/buttons.module.scss"

const Output = ({output, copyText, textAreaRef, downFunction}) => {
   return (
      <div className={s.outputText}>
         <textarea defaultValue={output} ref={textAreaRef}></textarea>
         <div>
            <button className={b.copyButton} onClick={()=>copyText()} >Copy Text</button>
            <button className={b.downloadButton} onClick={downFunction}>Download</button>
         </div>
      </div>
   )
}

export default Output
