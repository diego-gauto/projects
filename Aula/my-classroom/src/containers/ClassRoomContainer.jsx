import { useContext } from "react";
import { Link } from "react-router-dom";
import { ClassRoomsContext } from "../context/classRoomContext";

const ClassRoomContainer = () => {
  const { classRooms } = useContext(ClassRoomsContext);

  return (
    <>
      <h1>Listado de Aulas disponibles</h1>
      <div>
        <h1>
          {classRooms.map((element, index) => {
            return (
              <div key={index}>
                <strong>
                  Curso: {element.name}
                  Capacidad:{element.capacity}
                </strong>
                {element.students.length < element.capacity ? (
                  <>
                    <div>Curso con cupos</div>
                    <button>
                      <Link to={`/AddStudentToClassRoom/${element.name}`}>
                        Agregar alumno{" "}
                      </Link>
                    </button>
                    <button>
                      <Link to={`/DeleteStudentFromClassRoom/${element.name}`}>
                        Quitar alumno{" "}
                      </Link>
                    </button>
                  </>
                ) : (
                  <>
                    <div>Curso sin cupos</div>
                    <button>
                      <Link to={`/DeleteStudentFromClassRoom/${element.name}`}>
                        Quitar alumno{" "}
                      </Link>
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </h1>
      </div>
    </>
  );
};

export default ClassRoomContainer;
