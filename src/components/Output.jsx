import s from "./../styles/Output.module.scss"
import b from "./../styles/buttons.module.scss"
import nofound from "./../assets/Muñeco.png"

const Output = () => {
   return (
      <div className={s.outputText}>
         <p>Dolor dicta asperiores provident animi laboriosam ipsam. Neque reprehenderit ad obcaecati vero ea Delectus at autem eius ullam aperiam Dolorem quod culpa fuga voluptatem dolor vel Eveniet fugit nesciunt laudantium</p>
         <button className={b.copyButton}>Copy Text</button>
      </div>
   )
}

export default Output
