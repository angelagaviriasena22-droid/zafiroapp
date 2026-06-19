import Navbar from "../components/layout/Navbar";
import "../styles/CrearViaje.css";

function CrearViaje() {
  return (
    <>
      <Navbar />

      <main className="crear-viaje">
        <section className="travel-container">

          <div className="destinos">
            <div className="ruta">
              <input type="text" placeholder="Origen" />
              <button className="swap">⇄</button>
              <input type="text" placeholder="Destino" />
            </div>

            <div className="ruta">
              <input type="text" placeholder="Origen" />
              <button className="swap">⇄</button>
              <input type="text" placeholder="Destino" />
            </div>

            <button className="agregar">
              + Agregar más destinos
            </button>
          </div>

          <div className="fecha">
            <h3>Fecha</h3>

            <div className="tipo-viaje">
              <button className="tipo">Ida</button>
              <button className="tipo">Vuelta</button>
            </div>

            <input type="date" />
          </div>

          <div className="pasajeros">
            <div>
              <label>Adultos</label>
              <input type="number" min="1" defaultValue="1" />
            </div>

            <div>
              <label>Niños</label>
              <input type="number" min="0" defaultValue="0" />
            </div>

            <div>
              <label>Infantes</label>
              <input type="number" min="0" defaultValue="0" />
            </div>
          </div>

        </section>

        <button className="btn-siguiente">
          Siguiente
        </button>
      </main>
    </>
  );
}

export default CrearViaje;