//import logo from "./logo.jpg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClassRoomContainer from "./containers/ClassRoomContainer";
import HomeContainer from "./containers/HomeContainer";
import FormAddStudent from "./components/FormAddStudent";
import FormAddClassRoom from "./components/FormAddClassRoom";
import AddStudentToClassRoom from "./components/AddStudentToClassRoom";
import DeleteStudentFromClassRoom from "./components/DeleteStudentFromClassRoom";
import ClassRoomProvider from "./context/classRoomContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ClassRoomProvider>
          <Routes>
            <Route exact path="/Home" element={<HomeContainer />} />
            <Route exact path="/FormAddStudent" element={<FormAddStudent />} />
            <Route
              exact
              path="/FormAddClassRoom"
              element={<FormAddClassRoom />}
            />
            <Route
              exact
              path="/ClassRoomContainer"
              element={<ClassRoomContainer />}
            />
            <Route
              path="/AddStudentToClassRoom/:name"
              element={<AddStudentToClassRoom />}
            />
            <Route
              path="/DeleteStudentFromClassRoom/:name"
              element={<DeleteStudentFromClassRoom />}
            />
          </Routes>
        </ClassRoomProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
