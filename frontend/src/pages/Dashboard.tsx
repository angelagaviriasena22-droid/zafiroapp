import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

import cartagena from "../assets/cartagena.jpg";
import sanAndres from "../assets/San_Andres.jpg";
import cancun from "../assets/cancun.jfif";
import medellin from "../assets/medellinjfif.jfif";
import ejeCafetero from "../assets/eje_cafetero.webp";
import santaMarta from "../assets/santa_marta.jpg";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      {/* Bienvenida */}
      <section className="bienvenida">
        <div className="bienvenida-card">
          <h2>✈️ Bienvenidos a Zafiro Bloom Tours</h2>

          <p>
            Descubre destinos increíbles y vive experiencias inolvidables.
            Encuentra los mejores paquetes turísticos para disfrutar tus
            vacaciones con comodidad, seguridad y los mejores precios.
          </p>
        </div>
      </section>

      <div className="contenedor-boton-viaje">
        <button
          className="btn-viaje"
          onClick={() => navigate("/crear-viaje")}
        >
          Crea tú propio viaje!
        </button>
      </div>

      {/* Paquetes */}
      <section className="paquetes">
        <h2>🌎 Paquetes Destacados</h2>

        {/* Primera fila */}
        <div className="contenedor-paquetes">

          <div className="paquete">
            <img src={cartagena} alt="Cartagena" />

            <h3>Cartagena</h3>

            <p>
              3 días y 2 noches en uno de los destinos más visitados de Colombia.
            </p>

            <h4>$850.000</h4>

            <button>Ver más</button>
          </div>

          <div className="paquete">
            <img src={sanAndres} alt="San Andrés" />

            <h3>San Andrés</h3>

            <p>
              Disfruta de playas paradisíacas y planes todo incluido.
            </p>

            <h4>$1.200.000</h4>

            <button>Ver más</button>
          </div>

          <div className="paquete">
            <img src={cancun} alt="Cancún" />

            <h3>Cancún</h3>

            <p>
              Vive una experiencia internacional en el Caribe mexicano.
            </p>

            <h4>$2.800.000</h4>

            <button>Ver más</button>
          </div>

        </div>

        {/* Segunda fila */}
        <div className="contenedor-paquetes">

          <div className="paquete">
            <img src={medellin} alt="Medellín" />

            <h3>Medellín</h3>

            <p>
              Conoce la ciudad de la eterna primavera y sus principales
              atractivos turísticos.
            </p>

            <h4>$950.000</h4>

            <button>Ver más</button>
          </div>

          <div className="paquete">
            <img src={santaMarta} alt="Santa Marta" />

            <h3>Santa Marta</h3>

            <p>
              Disfruta de hermosas playas y visita el Parque Nacional Tayrona.
            </p>

            <h4>$1.050.000</h4>

            <button>Ver más</button>
          </div>

          <div className="paquete">
            <img src={ejeCafetero} alt="Eje Cafetero" />

            <h3>Eje Cafetero</h3>

            <p>
              Vive una experiencia única entre montañas, café y naturaleza.
            </p>

            <h4>$1.350.000</h4>

            <button>Ver más</button>
          </div>

        </div>

      </section>
    </div>
  );
}

export default Dashboard;