import shoes from "../../assets/img/shoesOnTrack.jpg";
import matter from "../../assets/img/MATTER.png";
import key from "../../assets/img/Keyboard.png";




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
          <img src={matter} alt="Matter" className="img" />
          <div className="infoContainer">
            <div className="proyectTitleContainer">
              <span className="proyectTitle">Matter</span>
              <span className="proyectInfo">
                Desarrollé un sistema de facturación completo, diseñado para simplificar la gestión de pagos y facturas. La aplicación permite a los usuarios generar y administrar facturas de manera automatizada, con funciones de cálculo de impuestos, seguimiento de pagos y generación de reportes.
              </span>
            </div>
            <div className="secondInfoProyect">
              <span>INFORMACION DEL PROYECTO</span>
              <div className="date">
                <span>Año</span>
                <span>2024</span>
              </div>
              <div className="date">
                <span>Rol</span>
                <span>Desarrollador Front-end</span>
              </div>
              <a href="https://matter-tau.vercel.app/">
                <button className="buttonDemo">LIVE DEMO</button>
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="proyect">
          <img src={key} alt="Key Board" className="img" />
          <div className="infoContainer">
            <div className="proyectTitleContainer">
              <span className="proyectTitle">Keyboard Game</span>
              <span className="proyectInfo">
                Desarrollé un juego de escritura en JavaScript que desafía a los usuarios a escribir lo más rápido y preciso posible. La aplicación mide la velocidad, precisión y progreso, proporcionando estadísticas detalladas en tiempo real. Este proyecto se centra en la interactividad y la experiencia del usuario, optimizando el rendimiento para que el juego sea dinámico y fluido.
              </span>
            </div>
            <div className="secondInfoProyect">
              <span>INFORMACION DEL PROYECTO</span>
              <div className="date">
                <span>Año</span>
                <span>2024</span>
              </div>
              <div className="date">
                <span>Rol</span>
                <span>Desarrollador Javascript</span>
              </div>
              <a href="https://key-board-game.vercel.app/">
                <button className="buttonDemo">LIVE DEMO</button>
              </a>{" "}
            </div>
          </div>
        </div>
        {/* <div className="proyect">
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
        </div> */}
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
