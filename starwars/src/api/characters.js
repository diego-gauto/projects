import NetworkError from "../errors/errors";

const getCharacters = async (page) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    if (!response.ok) {
      throw new NetworkError();
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const getCharacter = async (id) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    if (!response.ok) {
      throw new NetworkError();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const searchCharacters = async (searchText) => {
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${searchText}`
    );
    if (!response.ok) {
      throw new NetworkError();
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
};

export default getCharacters;
