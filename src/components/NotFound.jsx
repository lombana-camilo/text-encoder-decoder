import s from "./../styles/NotFound.module.scss"
import nofound from "./../assets/Muñeco.png"

const NotFound = () => {
   return (
      <div className={s.outputText}>
         <img src={ nofound } alt="" />
         <h4>No text was found</h4>
         <p>Type in or upload a file with the text to be encoded/decoded</p>
      </div>
   )
}

export default NotFound
