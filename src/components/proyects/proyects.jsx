import shoes from "../../assets/img/shoesOnTrack.jpg";
import speedy from "../../assets/img/speedy.png";
import keyBoard from "../../assets/img/Keyboard.png";
import arka from "../../assets/img/arka.png";

import "./proyects.css";

function Proyects() {
  return (
    <section className="sectionProyect">
      <div className="titlesContainer">
        <span className="firstTitle">PROYECTOS DESTACADOS</span>
        <span className="subTitle">
          Estos son algunos de los proyectos seleccionados que muestran mi
          pasión por el desarrollo web.
        </span>
      </div>
      <div className="proyectsContainer">
        <div className="proyect">
          <img src={shoes} alt="Shoes On Track" className="img" />
          <div className="infoContainer">
            <div className="proyectTitleContainer">
              <span className="proyectTitle">Shoes On Track</span>
              <span className="proyectInfo">
                Este proyecto es una plataforma de comercio electrónico
                especializada en la venta de zapatillas deportivas. La
                aplicación ofrece una experiencia de compra intuitiva, con un
                catálogo dinámico que permite a los usuarios explorar productos
                mediante filtros por categoría, marca, tamaño y precio.{" "}
              </span>
            </div>
            <div className="secondInfoProyect">
              <span>INFORMACION DEL PROYECTO</span>
              <div className="date">
                <span>Año</span>
                <span>2023</span>
              </div>
              <div className="date">
                <span>Rol</span>
                <span>Desarrollador Front-end</span>
              </div>
              <a href="https://deploy-front-alpha.vercel.app/">
                <button className="buttonDemo">LIVE DEMO</button>
              </a>
            </div>
          </div>
        </div>
        <div className="proyect">
          <img src={shoes} alt="Shoes On Track" className="img" />
          <div className="infoContainer">
            <div className="proyectTitleContainer">
              <span className="proyectTitle">Shoes On Track</span>
              <span className="proyectInfo">
                Este proyecto es una plataforma de comercio electrónico
                especializada en la venta de zapatillas deportivas. La
                aplicación ofrece una experiencia de compra intuitiva, con un
                catálogo dinámico que permite a los usuarios explorar productos
                mediante filtros por categoría, marca, tamaño y precio.{" "}
              </span>
            </div>
            <div className="secondInfoProyect">
              <span>INFORMACION DEL PROYECTO</span>
              <div className="date">
                <span>Año</span>
                <span>2023</span>
              </div>
              <div className="date">
                <span>Rol</span>
                <span>Desarrollador Front-end</span>
              </div>
              <a href="https://deploy-front-alpha.vercel.app/">
                <button className="buttonDemo">LIVE DEMO</button>
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="proyect">
          <img src={shoes} alt="Shoes On Track" className="img" />
          <div className="infoContainer">
            <div className="proyectTitleContainer">
              <span className="proyectTitle">Shoes On Track</span>
              <span className="proyectInfo">
                Este proyecto es una plataforma de comercio electrónico
                especializada en la venta de zapatillas deportivas. La
                aplicación ofrece una experiencia de compra intuitiva, con un
                catálogo dinámico que permite a los usuarios explorar productos
                mediante filtros por categoría, marca, tamaño y precio.{" "}
              </span>
            </div>
            <div className="secondInfoProyect">
              <span>INFORMACION DEL PROYECTO</span>
              <div className="date">
                <span>Año</span>
                <span>2023</span>
              </div>
              <div className="date">
                <span>Rol</span>
                <span>Desarrollador Front-end</span>
              </div>
              <a href="https://deploy-front-alpha.vercel.app/">
                <button className="buttonDemo">LIVE DEMO</button>
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="proyect">
          <img src={shoes} alt="Shoes On Track" className="img" />
          <div className="infoContainer">
            <div className="proyectTitleContainer">
              <span className="proyectTitle">Shoes On Track</span>
              <span className="proyectInfo">
                Este proyecto es una plataforma de comercio electrónico
                especializada en la venta de zapatillas deportivas. La
                aplicación ofrece una experiencia de compra intuitiva, con un
                catálogo dinámico que permite a los usuarios explorar productos
                mediante filtros por categoría, marca, tamaño y precio.{" "}
              </span>
            </div>
            <div className="secondInfoProyect">
              <span>INFORMACION DEL PROYECTO</span>
              <div className="date">
                <span>Año</span>
                <span>2023</span>
              </div>
              <div className="date">
                <span>Rol</span>
                <span>Desarrollador Front-end</span>
              </div>
              <a href="https://deploy-front-alpha.vercel.app/">
                <button className="buttonDemo">LIVE DEMO</button>
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proyects;

// <section className="sectionProyect">
//       <span className="firstTitle">PROYECTOS DESTACADOS</span>
//       <span>
//         Estos son algunos de los proyectos seleccionados que muestran mi pasión
//         por el desarrollo web.
//       </span>
//       <div className="proyectsContainer">
//         <div className="allProyects">
//           <div className="proyect">
//             <div className="imgContainer">
//               <a href="https://deploy-front-alpha.vercel.app/">
//                 <img src={shoes} alt="Shoes On Track" className="img" />
//               </a>
//             </div>
//             <div className="infoContainer">
//               <span className="proyectTitle">Shoes On Track</span>
//               <span className="proyectInfo">E-Commerce </span>
//               <span className="proyectTech">
//                 Javascript, React, Node.js, PostgreSQL
//               </span>
//             </div>
//           </div>
//           <div className="proyect">
//             <div className="infoContainer">
//               <span className="proyectTitle">SpeedyCoin</span>
//               <span className="proyectInfo">Trabajo hecho como FreeLance</span>
//               <span className="proyectTech"> HTML5,{"  "} CSS</span>
//             </div>
//             <div className="imgContainer">
//               <a href="https://speedy-one.vercel.app/">
//                 <img src={speedy} alt="SpeedyCoin" className="img" />
//               </a>
//             </div>
//           </div>
//           <div className="proyect">
//             <div className="imgContainer">
//               <a href="https://key-board-game.vercel.app/">
//                 <img src={keyBoard} alt="Kimba" className="img" />
//               </a>
//             </div>
//             <div className="infoContainer">
//               <span className="proyectTitle">Key Board Game</span>
//               <span className="proyectInfo">Juego de teclado</span>
//               <span className="proyectTech">Javascript, HTML5, CSS</span>
//             </div>
//           </div>
//           <div className="proyect">
//             <div className="infoContainer">
//               <span className="proyectTitle">Retro-Game</span>
//               <span className="proyectInfo">Juego de arcade</span>
//               <span className="proyectTech"> Javascript, HTML5, CSS</span>
//             </div>
//             <div className="imgContainer">
//               <a href="https://retro-game-eight.vercel.app/">
//                 <img src={arka} alt="Nuevo Proyecto" className="img" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
