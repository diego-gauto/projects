import { useEffect, useState } from "react";
import getCharacters from "./api/api";
import Card from "./components/card";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setCharacters(await getCharacters(searchText));
    };
    fetchData();
  }, []);

  const handleChange = (searchText) => {
    setSearchText(searchText);
  };

  return (
    <div className="all">
      <h1>Breaking Bad Wiki</h1>
      <input
        type="text"
        id="serchText"
        value={searchText}
        onChange={(e) => handleChange(e.target.value)}
        className="form-control"
        placeholder="Ingrese un nombre"
      />
      <div className="row">
        {characters &&
          characters.map((character) => {
            if (
              character.name.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return (
                <div
                  className="cards col-md-4 col-xs-12"
                  key={character.char_id}
                >
                  <Card character={character} />
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}

export default App;
