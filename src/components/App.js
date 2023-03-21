/* SECCIÓN DE IMPORT */
// - De React
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import callToApi from "../services/api";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
// import ErrorFilter from "./ErrorFilter";
import "../styles/App.scss";
// - Imágenes
/* SECCIÓN DEL COMPONENTE */
function App() {
  const [characterList, setCharacterList] = useState([]);
  const [typedName, setTypedName] = useState("");
  const [selectHouse, setSelectHouse] = useState("Gryffindor");
  // const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    callToApi(selectHouse).then((selectedData) => {
      setCharacterList(selectedData);
    });
  }, [selectHouse]);

  // length === 0 (take a look Dayana)
  // const handleTypedName = (value) => {
  //   if (characterList[0].name.includes(value)) {
  //     setTypedName(value);
  //     setErrorMsg("");
  //   } else {
  //     setTypedName(value);
  //     setErrorMsg(
  //       <small>
  //         There is not any character who has any coincidence with the following
  //         word {typedName}
  //       </small>
  //     );
  //   }
  // };

  const handleTypedName = (value) => {
    setTypedName(value);
  };

  // const renderErrorFilter = <ErrorFilter typedName={typedName}></ErrorFilter>;

  // const renderSearchResult =
  //   inputFiltered.length === 0 ? renderErrorFilter : handleTypedName;

  const handleSelectHouse = (value) => {
    setSelectHouse(value);
  };

  const inputFiltered = characterList.filter((eachCharacter) => {
    return eachCharacter.name
      .toLocaleLowerCase()
      .includes(typedName.toLocaleLowerCase());
  });
  // .filter((eachCharacter) => {
  //   return eachCharacter.house === selectHouse;
  // });

  /* HTML */
  return (
    <div className="App">
      {/* Aquí va el HTML */}
      <header className="header">
        <h1 className="header__title">~ Harry Potter! ⚡️ </h1>
        <img className="header__img" src="" alt="Harry Potter" title="" />
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  typedName={typedName}
                  selectHouse={selectHouse}
                  handleTypedName={handleTypedName}
                  handleSelectHouse={handleSelectHouse}
                ></Filters>
                <CharacterList inputFiltered={inputFiltered}></CharacterList>
              </>
            }
          ></Route>
          <Route
            path="/character/:characterId"
            element={
              <CharacterDetail characterList={characterList}></CharacterDetail>
            }
          ></Route>
        </Routes>
      </main>
      {/* {errorMsg} */}
    </div>
  );
}

export default App;
