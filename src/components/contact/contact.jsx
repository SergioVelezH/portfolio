import "./contact.css";
import ig from "../../assets/img/icons8-instagram-50.png";
import link from "../../assets/img/icons8-linkedin-50.png";
import wsp from "../../assets/img/icons8-whatsapp-50.png";
import github from "../../assets/img/icons8-github-50.png";

function Contact() {
  return (
    <section className="aboutSection">
      <div className="aboutContainer">
        <span className="title">CONECTEMOS</span>
        <div className="descriptionContainerContact">
          <div className="contactDescription">
            <div className="underline">
              <span className="secondDescription">
                sergiovelezhernandez11@gmail.com
              </span>
            </div>
            <span className="redes">
              Para más información acá estan mis redes
            </span>
          </div>
          <div className="redesContainer">
            <a
              href="https://www.linkedin.com/in/sergio-v%C3%A9lez-435510284/"
              className="redesImg"
            >
              <img src={link} alt="" className="logo" />
            </a>
            <a href="https://github.com/SergioVelezH" className="redesImg">
              <img src={github} alt="" className="logo" />
            </a>
            <a href="  https://www.instagram.com/ssergiovelez_/" className="redesImg">
              <img src={ig} alt="" className="logo" />
            </a>
            <a href="https://wa.link/49qto7" className="redesImg">
              <img src={wsp} alt="" className="logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

{
  /* <section className="sectionContact">
  https://www.instagram.com/ssergiovelez_/
      <div className="divContact">
        <span className="contactTitle">Developed by Sergio Vélez</span>
        <div className="logosContacto">
          <div className="logoContainer">
            <a href="https://github.com/SergioVelezH">
              <img src={github} alt="" className="logo" />
            </a>
          </div>
          <div className="logoContainer">
            <a href="https://wa.link/49qto7">
              <img src={wsp} alt="" className="logo" />
            </a>
          </div>
          <div className="logoContainer">
            <a href="https://www.linkedin.com/in/sergio-v%C3%A9lez-435510284/">
              <img src={link} alt="" className="logo" />
            </a>
          </div>
        </div>
      </div>
    </section> */
}
