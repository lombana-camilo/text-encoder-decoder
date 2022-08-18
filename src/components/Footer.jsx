import s from "./../styles/Footer.module.scss";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={s.footer}>
      <p>&copy;2022 Camilo Lombana</p>
      <div>
        <a
          href="https://github.com/lombana-camilo/text-encoder-decoder.git"
          rel="noreferrer"
          target={"_blank"}
        >
          <FaGithub size="30px" style={{ margin: "0 0.6rem" }} />
        </a>

        <a href="mailto:lombana-camilo@hotmail.com">
          <FaEnvelope size="30px" style={{ margin: "0 0.6rem" }} />
        </a>

        <a
          href="https://www.linkedin.com/in/camilo-lombana-970812196?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrlF4d7jnQ1eMa1HaJKwrzQ%3D%3D"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaLinkedin size="30px" style={{ margin: "0 0.6rem" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
