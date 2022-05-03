import s from "./../styles/NotFound.module.scss"
import nofound from "./../assets/Muñeco.png"

const NotFound = () => {
   return (
      <div className={s.outputText}>
         <img src={ nofound } alt="" />
         <h3>No text was found</h3>
         <p>Type in or upload a file with the text to be encoded/decoded</p>
      </div>
   )
}

export default NotFound
