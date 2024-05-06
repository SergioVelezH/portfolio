import "./contact.css";
import fig from "../../assets/img/icons8-gmail-nuevo.svg"
import telefono from "../../assets/img/icons8-teléfono-celular-48.png"
import link from "../../assets/img/icons8-linkedin.svg"



function Contact() {
  return (
    <section className="sectionContact">
    <div className="contactContainer">
      <div className="contactTitleContainer">
        <span className="contactTitle">CONTACTAME!</span>
      </div>
      <div className="emailContainer">
        <img src={fig} alt="" className="emialimg" />
        <span className="email">Email : sergiovelezhernandez@gmail.com</span>
      </div>
      <div className="telefonoContainer">
        <img src={telefono} alt="" />
        <span className="telefono">Telefono : 351-347-4734 </span>
      </div>
      <div className="linkedinContainer">
        <img src={link} alt="" />
        <a href="https://www.linkedin.com/in/sergio-v%C3%A9lezz/" style={{ textDecoration: "none" }}>
        <span className="linkedin">LinkedIn : segiovelezH</span>
        </a>
      </div>
    </div>
    </section>
  );
}

export default Contact;
