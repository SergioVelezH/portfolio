import shoes from "../../assets/img/shoesOnTrack.jpg";
import speedy from "../../assets/img/speedy.png";
import keyBoard from "../../assets/img/Keyboard.png";
import arka from "../../assets/img/arka.png"

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
              <p>
                -Se utilizaron teconologías como
                Javascript, React, Node.js, PostgreSQL
              </p>
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
              <p>-Trabajo hecho como FreeLance</p>
              <p>-Se utilizaron teconologías como
                HTML5, CSS</p>
            </div>
          </div>
          <div className="proyect">
            <div className="imgContainer">
              <a href="https://key-board-game.vercel.app/">
                <img src={keyBoard} alt="Kimba" />
              </a>
            </div>
            <div className="infoContainer">
              <h2>Key Board Game</h2>
              <p>-Juego de teclado</p>
              <p>-Se utilizaron tecnologías como Javascript, HTML5, CSS</p>
            </div>
          </div>
          <div className="proyect">
            <div className="imgContainer">
              <a href="https://retro-game-eight.vercel.app/">
                <img src={arka} alt="Nuevo Proyecto" />
              </a>
            </div>
            <div className="infoContainer">
              <h2>Retro-Game</h2>
              <p>-Juego de arcade</p>
              <p>-Se utilizaron tecnologías como Javascript, HTML5, CSS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proyects;
