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
  /* VARIABLES ESTADO (DATOS) */

  /* EFECTOS (código cuando carga la página) */
  useEffect(() => {
    callToApi().then((selectionData) => {
      setCharacterList(selectionData);
      console.log(selectionData);
    });
  }, []);

  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return (
    <div className="App">
      {/* Aquí va el HTML */}
      <header className="header">
        <h1 className="header__title">~ Harry Potter! ⚡️ </h1>
        <img className="header__img" src="" alt="Harry Potter" title="" />
      </header>
      <main className="main">
        <Filters></Filters>
        <CharacterList></CharacterList>
      </main>
    </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
