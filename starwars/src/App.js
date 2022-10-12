import "./App.css";
import getCharacters, {
  getCharacter,
  searchCharacters,
} from "./api/characters";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [errorState, SetErrorState] = useState({ hasError: false });
  const [currentCharacter, setCurrentCharacter] = useState({});
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setCharacters(await getCharacters(1));
    };

    try {
      fetchData();
    } catch (error) {
      handleError(error);
    }
  }, []);

  const handleError = (error) => {
    SetErrorState({ hasError: true, message: error.message });
  };

  const getCurrentCharacter = async (url) => {
    const characterId = Number(url.split("/").slice(-2)[0]);
    setCurrentCharacter(await getCharacter(characterId));
  };

  const handleChange = async (event) => {
    const searchText = event.target.value;
    setSearch(searchText);
    if (!searchText) {
      setCharacters(await getCharacters(page));
    } else {
      setCurrentCharacter({});
      setCharacters(await searchCharacters(searchText));
    }
  };

  const handlePage = async (direction) => {
    const newPage = page + direction;
    if (newPage <= 0 || newPage >= 9) return;
    setSearch("");
    setCharacters(await getCharacters(newPage));
    setPage(newPage);
  };

  return (
    <div>
      <form>
        <label>Ingrese un nombre</label>
        <input type="text" value={search} onChange={handleChange}></input>
      </form>
      <ul>
        {characters.map((character) => (
          <li
            key={character.name}
            onClick={() => getCurrentCharacter(character.url)}
          >
            {" "}
            {character.name}
          </li>
        ))}
      </ul>
      <section>
        <button onClick={() => handlePage(-1)}> Prev </button>| {page} |
        <button onClick={() => handlePage(+1)}> Next </button>
      </section>

      {currentCharacter && (
        <ul>
          <li>Name: {currentCharacter.name}</li>
          <li>Height: {currentCharacter.height}</li>
          <li>Weight: {currentCharacter.mass}</li>
        </ul>
      )}
    </div>
  );
}

export default App;
