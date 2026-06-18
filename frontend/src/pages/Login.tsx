import { useNavigate } from "react-router-dom";

import Button from "../components/ui/Button";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="page">
      <div className="login-card">
        <h1>Bienvenido Usuario</h1>
        
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
        
        <Button text="Iniciar Sesión" onClick={handleLogin} />
        
      </div>
    </div>
  );
}

export default Login;