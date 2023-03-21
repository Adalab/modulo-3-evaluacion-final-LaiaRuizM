/* SECCIÓN DE IMPORT */
// - De React
import { useEffect, useState } from "react";
// import { Route, Routes } from "react-router-dom";
// - Nuestros
import callToApi from "../services/api";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
// - Sass
import "../styles/App.scss";
// - Imágenes
/* SECCIÓN DEL COMPONENTE */
function App() {
  const [characterList, setCharacterList] = useState([]);
  const [typedName, setTypedName] = useState("");
  const [selectHouse, setSelectHouse] = useState("Gryffindor");

  /* VARIABLES ESTADO (DATOS) */

  /* EFECTOS (código cuando carga la página) */
  useEffect(() => {
    callToApi(selectHouse).then((selectedData) => {
      setCharacterList(selectedData);
    });
  }, [selectHouse]);

  const handleTypedName = (value) => {
    setTypedName(value);
  };

  const handleSelectHouse = (value) => {
    setSelectHouse(value);
  };

  const inputFiltered = characterList
    .filter((eachCharacter) => {
      return eachCharacter.name
        .toLocaleLowerCase()
        .includes(typedName.toLocaleLowerCase());
    })
    .filter((eachHouse) => {
      return eachHouse.house === selectHouse;
    });

  /* HTML */
  return (
    <div className="App">
      {/* Aquí va el HTML */}
      <header className="header">
        <h1 className="header__title">~ Harry Potter! ⚡️ </h1>
        <img className="header__img" src="" alt="Harry Potter" title="" />
      </header>
      <main className="main">
        <Filters
          typedName={typedName}
          selectHouse={selectHouse}
          handleTypedName={handleTypedName}
          handleSelectHouse={handleSelectHouse}
        ></Filters>
        <CharacterList inputFiltered={inputFiltered}></CharacterList>
      </main>
    </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
