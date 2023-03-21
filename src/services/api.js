const callToApi = (selectHouse) => {
  // Llamamos a la API
  return fetch(
    `https://hp-api.onrender.com/api/characters/house/${selectHouse}`
  )
    .then((response) => response.json())
    .then((data) => {
      // Cuando responde la API podemos limpiar los datos aquí
      const selectedData = data.map((eachCharacter) => {
        return {
          name: eachCharacter.name,
          photo:
            eachCharacter.image ||
            `https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter`,
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
