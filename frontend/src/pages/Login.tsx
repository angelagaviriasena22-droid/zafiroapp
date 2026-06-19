import { useNavigate } from "react-router-dom";

import Button from "../components/ui/Button";

import logo from "../assets/logo.png"; 




function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="page">
      <div className="login-card">
  
<img src={logo}
  alt="Logo Zafiro Bloom Tours"
  style={{
    width: "120px",
    height: "auto",
    display: "block",
    margin: "0 auto"
  }}
/>
  
        <h1>Bienvenido</h1>

<p className="mensaje-login">
  Descubre destinos increíbles. Inicia sesión para comenzar tu próximo viaje.
</p>

        <input
          type="email"
          placeholder="Correo electrónico"
        />

        <input
          type="password"
          placeholder="Contraseña"
        />

        <p className="olvide-contrasena">
  ¿Olvidaste tu contraseña?
</p>

        <Button
          text="Ingresar"
          onClick={handleLogin}
        />

<p className="texto-registro">
  ¿No tienes cuenta?
</p>
        
<a href="#" className="registrate">
  Regístrate →
</a>

      </div>
    </div>
  );
}

export default Login;