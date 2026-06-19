import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo Zafiro Bloom Tours" className="logo" />
      </div>

      <ul className="menu">
        <li>Inicio</li>
        <li>|</li>
        <li>Paquetes</li>
        <li>|</li>
        <li>Destinos</li>
        <li>|</li>
        <li>Mis Reservas</li>
        <li>|</li>
        <li>Mi Perfil</li>
      </ul>

      <div className="menu-icon">☰</div>
    </nav>
  );
}

export default Navbar;