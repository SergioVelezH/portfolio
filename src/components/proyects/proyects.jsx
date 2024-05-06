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
            <a href="https://deploy-front-alpha.vercel.app/">
              <img src={shoes} alt="Shoes On Track" />
              <span>Shoes On Track</span>
            </a>
          </div>
          <div className="proyect">
            <a href="https://speedy-one.vercel.app/">
              <img src={speedy} alt="SpeedyCoin" />
              <span>SpeedyCoin</span>
            </a>
          </div>
          <div className="proyect">
            <a href="https://kimba-three.vercel.app/">
              <img src={kimba} alt="Kimba" />
              <span>Kimba</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proyects;
