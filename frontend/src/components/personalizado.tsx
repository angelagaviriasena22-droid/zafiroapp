import Navbar from "../components/layout/Navbar";
import "../styles/personalizado.css"; // Importa los estilos

function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="personalizado">
        <section className="travel-container">
          {/* Destinos */}
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

            <button className="agregar">+ Agregar más destinos</button>
          </div>

          {/* Fecha */}
          <div className="fecha">
            <h3>Fecha</h3>
            <div className="tipo-viaje">
              <button className="tipo">Ida</button>
              <button className="tipo">Vuelta</button>
            </div>
            <input type="date" />
          </div>

          {/* Pasajeros */}
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

        <button className="btn-siguiente">Siguiente</button>
      </main>
    </>
  );
}

export default Dashboard;
