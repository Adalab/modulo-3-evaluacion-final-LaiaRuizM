import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import callToApi from "../services/api";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
// import ErrorFilter from "./ErrorFilter";
import ErrorLink from "./ErrorLink";
import backgroundImg from "../images/houses.jpeg";
import "../styles/App.scss";
function App() {
  const [characterList, setCharacterList] = useState([]);
  const [typedName, setTypedName] = useState("");
  const [selectHouse, setSelectHouse] = useState("Gryffindor");
  const [genderFilter, setGenderFilter] = useState("all");
  const [errorMsg, setErrorMsg] = useState(false);

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

  const handleGenderFilter = (value) => {
    setGenderFilter(value);
  };

  const handleResetData = () => {
    setTypedName("");
    setSelectHouse("Gryffindor");
    setGenderFilter("all");
  };

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
  };

  const inputFiltered = characterList
    .filter((eachCharacter) => {
      return eachCharacter.name
        .toLocaleLowerCase()
        .includes(typedName.toLocaleLowerCase());
    })
    .sort((x, y) => x.name.localeCompare(y.name))
    .filter((eachCharacter) => {
      return genderFilter === "all"
        ? true
        : eachCharacter.gender === genderFilter;
    });
  if (inputFiltered.length > 0 && errorMsg) {
    setErrorMsg(false);
  } else if (inputFiltered.length === 0 && !errorMsg) {
    setErrorMsg(true);
  }

  /* HTML */
  return (
    <div className="App">
      {/* Aquí va el HTML */}
      <header className="header">
        <h1 className="header__title">~ Harry Potter! ⚡️ </h1>
        {/* QUiZÁ PONER LA IMG COMO BACKGROUND MEJOR O AL LADO DEL TÍTULO ARRIBA COMO EN FRIENDS*/}
        <img
          className="header__img"
          src={backgroundImg}
          alt="Harry Potter"
          title=""
        />
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
                  handleGenderFilter={handleGenderFilter}
                  genderFilter={genderFilter}
                  handleResetData={handleResetData}
                ></Filters>
                <CharacterList
                  characterList={inputFiltered}
                  errorMsg={errorMsg}
                  typedName={typedName}
                ></CharacterList>
              </>
            }
          ></Route>
          <Route
            path="/character/:characterId"
            element={
              <CharacterDetail
                characterList={characterList}
                selectCharacterFound
                handleOnSubmit={handleOnSubmit}
              ></CharacterDetail>
            }
          ></Route>
          <Route path="*" element={<ErrorLink></ErrorLink>}></Route>
        </Routes>
      </main>
      {/* {errorMsg} */}
    </div>
  );
}

export default App;
