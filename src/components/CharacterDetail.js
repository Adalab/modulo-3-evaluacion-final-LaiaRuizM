import { Link, useLocation, matchPath } from "react-router-dom";
import gryffindor from "../images/gryffindor.jpeg";
import hufflepuff from "../images/hufflepuff.jpeg";
import ravenclaw from "../images/ravenclaw.jpeg";
import slytherin from "../images/slytherin.jpeg";

const CharacterDetail = ({ characterList, handleOnSubmit }) => {
  const imgEachHouse = {
    gryffindor: gryffindor,
    hufflepuff: hufflepuff,
    ravenclaw: ravenclaw,
    slytherin: slytherin,
  };
  const { pathname } = useLocation();
  const routeData = matchPath("/character/:characterId", pathname);
  const characterId = routeData !== null ? routeData.params.characterId : null;
  const selectCharacterFound = characterList.find(
    (character) => character.id === characterId
  );

  // const renderAlternateNames = ({ selectCharacterFound }) => {
  //   const arrayAlternative = selectCharacterFound.alternateName;
  //   const names = arrayAlternative.map((eachNameAlternative) => {
  //     return <li>{eachNameAlternative}</li>;
  //   });
  //   return names;
  // };

  return selectCharacterFound ? (
    <section>
      <Link to={"/"}>Return!</Link>
      <img
        src={selectCharacterFound.photo}
        alt={`Photography of ${selectCharacterFound.name}`}
      />
      <div>
        <h2>{selectCharacterFound.name}</h2>
        <ul>
          <li>
            Alternate name: {selectCharacterFound.alternateName.join(" or ")}
          </li>
          {/* <li>
            Alternate name:
            {selectCharacterFound.alternateName.length > 0
              ? renderAlternateNames()
              : " This character does not have any alternate name"}
          </li> */}
          <li>Status: {selectCharacterFound.status ? "Alive" : "💀"}</li>
          <li>Specie: {selectCharacterFound.species}</li>
          <li>Gender: {selectCharacterFound.gender}</li>
          <li>House: {selectCharacterFound.house}</li>
          <img
            src={imgEachHouse[selectCharacterFound.house.toLocaleLowerCase()]}
            alt={selectCharacterFound.house}
          />
        </ul>
        <div>
          <form onSubmit={handleOnSubmit}>
            <label>
              If you want to share with your Harry Potter's friends, here you
              have the magic link!
            </label>
            <input
              readOnly
              autoComplete="off"
              type="text"
              name="search"
              value={window.location}
            />
          </form>
        </div>
      </div>
    </section>
  ) : (
    <>
      <p>Character not found, please try again!</p>
      <Link to={"/"}>Return!</Link>
    </>
  );
};

// prop: alternateName

export default CharacterDetail;
