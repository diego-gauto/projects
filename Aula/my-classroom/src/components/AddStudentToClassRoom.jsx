import { useContext } from "react";
import { useParams } from "react-router";
import { ClassRoomsContext } from "../context/classRoomContext";
import { Link } from "react-router-dom";

const AddStudentToClassRoom = () => {
  const { classRooms, setClassRooms, listStudents } =
    useContext(ClassRoomsContext);
  const { name } = useParams();

  const addStudent = () => {
    const studentId = document.getElementById("selectAddStudent").selectedIndex;
    const student = document.getElementsByTagName("option")[studentId].value;
    const newClassRooms = [...classRooms];

    const index = newClassRooms.findIndex((element) => element.name === name);
    if (newClassRooms[index].students.length < newClassRooms[index].capacity) {
      const newListStudent = [...newClassRooms[index].students];
      newListStudent.push(student);
      newClassRooms[index].students = newListStudent;
      setClassRooms(newClassRooms);
    } else alert("El curso esta completo");

    console.log(classRooms);
    console.log(newClassRooms);
  };

  return (
    <>
      <h1>Elija un alumno para inscribir en el curso:{name}</h1>
      <select id="selectAddStudent">
        <option>Elija un alumno</option>
        {listStudents.map((element, index) => {
          return <option key={index}>{element.name}</option>;
        })}
      </select>
      <button
        className="btn btn-default"
        id="addbtn"
        onClick={addStudent}
        type="button"
      >
        Agregar alumno
      </button>
      <button>
        <Link to={"/ClassRoomContainer"}> Back to curses </Link>
      </button>
    </>
  );
};

export default AddStudentToClassRoom;
