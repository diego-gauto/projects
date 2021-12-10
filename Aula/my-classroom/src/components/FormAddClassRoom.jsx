import { useContext, useState } from "react";
import { ClassRoomsContext } from "../context/classRoomContext";
import { Link } from "react-router-dom";

const FormAddClassRoom = () => {
  const { classRooms, setClassRooms } = useContext(ClassRoomsContext);
  const [values, setValues] = useState({
    name: "",
    capacity: "",
    students: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newClassRooms = [...classRooms, values];
    setClassRooms(newClassRooms);
    console.log(newClassRooms);
  };

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    const newValues = { ...values, [name]: value };
    setValues(newValues);
    console.log(newValues);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1> Alta de cursos</h1>
        <label htmlFor="Nombre">Nombre del curso</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
        />
        <label htmlFor="capacity">Cantidad de alumnos</label>
        <input
          id="capacity"
          name="capacity"
          type="number"
          value={values.capacity}
          onChange={handleChange}
        />
        <button type="submit">Crear curso</button>
      </form>
      <button>
        <Link to={"/Home"}> Back to Home</Link>
      </button>
    </>
  );
};

export default FormAddClassRoom;
