import s from "./../styles/Logo.module.scss"
import logo from "./../assets/logo.png"

const Logo = () => {
   return (
   <img className={s.icon} src={logo} alt="Alura icon" />
   )
}

export default Logo
