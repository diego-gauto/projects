import {useContext, useState} from "react";
import {ClassRoomsContext} from "../context/classRoomContext";
import {Link} from "react-router-dom";

const FormAddStudent = () => {
  const {listStudents, setlistStudents}=useContext(ClassRoomsContext);
  const [values,setValues] = useState({name:"", email:""});
  
  const handleSubmit = (event)=>{
    event.preventDefault();
    const newListStudents=[...listStudents,values]
    setlistStudents(newListStudents);
    console.log(newListStudents);
  }

  const handleChange = (event)=>{
    const {target} = event;
    const {name,value} = target;
    const newValues = {...values,[name]:value};
    setValues(newValues);
    console.log(newValues);

  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1> Alta de estudiantes</h1>
      <label htmlFor="Nombre">Nombre</label>
      <input id="name" name="name" type="text" value={values.name} onChange={handleChange}/>
      <label htmlFor="Edad">Correo electronico</label>
      <input id="email" name="email" type="email" value={values.email} onChange={handleChange}/>
      <button type="submit">Agregar alumno</button>
    </form>
    <button>
      <Link to={"/Home"}> Back to Home</Link>
    </button>
    </>
  )
}

export default FormAddStudent;