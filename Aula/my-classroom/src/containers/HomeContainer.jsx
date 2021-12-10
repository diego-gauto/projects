import { Link } from "react-router-dom";
import logo from "../logo.jpg";
import "../App.css"

const HomeContainer = () => {
  return (
    <div className="Home">
    <header className="Home-header">
      <p>Bienvenidos a My ClassRoom</p>
      <img src={logo} className="Home-logo" alt="logo"/>
      <button>
        <Link to={"/FormAddStudent"}> Ingresar alumnos </Link>
      </button>
      <button>
        <Link to={"/FormAddClassRoom"}> Crear Curso </Link>
      </button>
      <button>
        <Link to={"/ClassRoomContainer"}> Cursos disponibles </Link>
      </button>
    </header>
    </div>
  );
};

export default HomeContainer;