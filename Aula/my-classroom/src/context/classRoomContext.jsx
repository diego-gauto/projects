import { createContext, useState } from "react";

export const ClassRoomsContext = createContext();

const ClassRoomsProvider = ({ children }) => {
  const [listStudents, setlistStudents] = useState([]);
  const [classRooms, setClassRooms] = useState([]);

  return (
    <ClassRoomsContext.Provider
      value={{ listStudents, setlistStudents, classRooms, setClassRooms }}
    >
      {children}
    </ClassRoomsContext.Provider>
  );
};

export default ClassRoomsProvider;
