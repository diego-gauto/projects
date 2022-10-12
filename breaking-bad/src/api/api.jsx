import NetworkError from "../errors/errors";

const getCharacters = async () => {
  try {
    const response = await fetch(
      `https://www.breakingbadapi.com/api/characters`
    );
    if (!response.ok) {
      throw new NetworkError();
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export default getCharacters;
