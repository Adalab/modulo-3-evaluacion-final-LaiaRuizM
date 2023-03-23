import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import callToApi from "../services/api";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Footer from "./Footer";
import ErrorLink from "./ErrorLink";
import "../styles/App.scss";
import Header from "./Header";
import Landing from "./Landing";

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

  const handleTypedName = (value) => {
    setTypedName(value);
  };

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

  return (
    <div>
      <main className="main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/list"
            element={
              <>
                <Header />
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
                  handleTypedName={handleTypedName}
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
      <Footer></Footer>
    </div>
  );
}

export default App;
