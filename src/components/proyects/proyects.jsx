import shoes from "../../assets/img/shoesOnTrack.jpg";
import speedy from "../../assets/img/speedy.png";
import kimba from "../../assets/img/kimbai.png";

import "./proyects.css";

function Proyects() {
  return (
    <section className="sectionProyect">
      <div className="proyectsContainer">
        <div className="proyectsTitle">
          <span className="firstTitle">PROYECTOS</span>
        </div>
        <div className="allProyects">
  <div className="proyect">
    <div className="imgContainer">
      <a href="https://deploy-front-alpha.vercel.app/">
      <img src={shoes} alt="Shoes On Track" />
      </a>
    </div>
    <div className="infoContainer">
      <h2>Shoes On Track</h2>
      <p>-Proyecto E-Commerce en grupo de 7 personas </p>
      <p>-Se utilizaron teconologias como Javascript,React,Node.js,PostregSQL</p>
    </div>
  </div>
  <div className="proyect">
    <div className="imgContainer">
      <a href="https://speedy-one.vercel.app/">
      <img src={speedy} alt="SpeedyCoin" />
      </a>
    </div>
    <div className="infoContainer">
      <h2>SpeedyCoin</h2>
      <p>Información general sobre SpeedyCoin...</p>
    </div>
  </div>
  <div className="proyect">
    <div className="imgContainer">
      <a href="https://kimba-three.vercel.app/">
      <img src={kimba} alt="Kimba" />
      </a>
    </div>
    <div className="infoContainer">
      <h2>Kimba</h2>
      <p>Información general sobre Kimba...</p>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}

export default Proyects;
