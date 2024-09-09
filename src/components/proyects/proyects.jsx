import shoes from "../../assets/img/shoesOnTrack.jpg";
import speedy from "../../assets/img/speedy.png";
import keyBoard from "../../assets/img/Keyboard.png";
import arka from "../../assets/img/arka.png";

import "./proyects.css";

function Proyects() {
  return (
    <section className="sectionProyect">
        <span className="firstTitle">PROYECTOS</span>
      <div className="proyectsContainer">
        <div className="allProyects">
          <div className="proyect">
            <div className="imgContainer">
              <a href="https://deploy-front-alpha.vercel.app/">
                <img src={shoes} alt="Shoes On Track" className="img" />
              </a>
            </div>
            <div className="infoContainer">
              <p className="proyectTitle">Shoes On Track</p>
              <p className="proyectInfo">
                 E-Commerce{" "}
              </p>
              <p className="proyectTech">
                Javascript, React, Node.js, PostgreSQL
              </p>
            </div>
          </div>
          <div className="proyect">
            <div className="infoContainer">
              <h2 className="proyectTitle">SpeedyCoin</h2>
              <p className="proyectInfo">Trabajo hecho como FreeLance</p>
              <p className="proyectTech">{" "} HTML5,{"  "} CSS</p>
            </div>
            <div className="imgContainer">
              <a href="https://speedy-one.vercel.app/">
                <img src={speedy} alt="SpeedyCoin" className="img" />
              </a>
            </div>
          </div>
          <div className="proyect">
            <div className="imgContainer">
              <a href="https://key-board-game.vercel.app/">
                <img src={keyBoard} alt="Kimba" className="img" />
              </a>
            </div>
            <div className="infoContainer">
              <h2 className="proyectTitle">Key Board Game</h2>
              <p className="proyectInfo">Juego de teclado</p>
              <p className="proyectTech">Javascript, HTML5, CSS</p>
            </div>
          </div>
          <div className="proyect">
            <div className="infoContainer">
              <h2 className="proyectTitle">Retro-Game</h2>
              <p className="proyectInfo">Juego de arcade</p>
              <p className="proyectTech"> Javascript, HTML5, CSS</p>
            </div>
            <div className="imgContainer">
              <a href="https://retro-game-eight.vercel.app/">
                <img src={arka} alt="Nuevo Proyecto" className="img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proyects;
