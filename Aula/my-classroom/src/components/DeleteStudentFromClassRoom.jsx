import { useContext } from "react";
import { useParams } from "react-router";
import { ClassRoomsContext } from "../context/classRoomContext";
import { Link } from "react-router-dom";

const DeleteStudentFromClassRoom = () => {
  const { classRooms, setClassRooms } = useContext(ClassRoomsContext);

  const { name } = useParams();
  console.log(classRooms);
  const newClassRooms = [...classRooms];
  console.log(newClassRooms);
  const index = newClassRooms.findIndex((element) => element.name === name);
  const newClassRoom = classRooms[index];
  console.log(newClassRoom);

  const deleteStudent = () => {
    const studentId = document.getElementById(
      "selectDeletedStudent"
    ).selectedIndex;
    const student = document.getElementsByTagName("option")[studentId].value;

    const newListStudent = [...newClassRoom.students];
    newListStudent.splice(newListStudent.indexOf(student), 1);
    newClassRooms[index].students = newListStudent;
    setClassRooms(newClassRooms);

    console.log(classRooms);
    console.log(newClassRooms);
  };

  return (
    <>
      <h1>Elija un alumno para dar de baja del curso:{name}</h1>
      <select id="selectDeletedStudent">
        <option>Elija un alumno</option>
        {newClassRoom.students.map((element, index) => {
          console.log(index, element);
          return <option key={index}>{element}</option>;
        })}
      </select>
      <button
        className="btn btn-default"
        id="deletebtn"
        onClick={deleteStudent}
        type="button"
      >
        borrar alumno
      </button>
      <button>
        <Link to={"/ClassRoomContainer"}> Back to curses </Link>
      </button>
    </>
  );
};

export default DeleteStudentFromClassRoom;
