import { Link, useLocation, matchPath } from "react-router-dom";
const CharacterDetail = ({ characterList }) => {
  const { pathname } = useLocation();
  const routeData = matchPath("/character/:characterId", pathname);
  const characterId = routeData !== null ? routeData.params.characterId : null;
  const selectCharacterFound = characterList.find(
    (character) => character.id === characterId
  );
  return (
    <section>
      <img
        src={selectCharacterFound.photo}
        alt={`Photography of ${selectCharacterFound.name}`}
      />
      <div>
        <h2>{selectCharacterFound.name}</h2>
        <ul>
          <li>Status: {selectCharacterFound.status ? "Alive" : "💀"}</li>
          <li>Specie: {selectCharacterFound.species}</li>
          <li>Gender: {selectCharacterFound.gender}</li>
          <li>House: {selectCharacterFound.house}</li>
          <li>Alternate name: {selectCharacterFound.alternateName}</li>
        </ul>
      </div>
      <Link to="/">Return!</Link>
    </section>
  );
};

export default CharacterDetail;
