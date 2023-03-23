import imgEstrella from "../images/estrellitaylaia.png";
const callToApi = (selectHouse) => {
  const url = `https://hp-api.onrender.com/api/characters/house/${selectHouse}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Cuando responde la API podemos limpiar los datos aquí
      const selectedData = data.map((eachCharacter) => {
        return {
          name: eachCharacter.name,
          photo: eachCharacter.image || imgEstrella,
          species: eachCharacter.species,
          id: eachCharacter.id,
          house: eachCharacter.house,
          gender: eachCharacter.gender,
          status: eachCharacter.alive,
          alternateName: eachCharacter.alternate_names,
        };
      });
      return selectedData;
    });
};

export default callToApi;
