import { Link, useLocation, matchPath } from "react-router-dom";
import gryffindor from "../images/gryffindor.png";
import hufflepuff from "../images/hufflepuff.png";
import ravenclaw from "../images/ravenclaw.png";
import slytherin from "../images/slytherin.png";
import "../styles/layouts/CharacterDetail.scss";
import LoadingHP from "./Loader";

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
  if (characterList.length === 0) {
    return <LoadingHP></LoadingHP>;
  }
  return selectCharacterFound ? (
    <>
      <div className="box">
        <Link className="box__link" to={"/list"}>
          <i className="fa-solid fa-angles-left"> Go back ⚡️ </i>
        </Link>
      </div>
      <section className="characterDetails">
        <article className="characterDetails__article">
          <div>
            <img
              className="img"
              src={selectCharacterFound.photo}
              alt={`Photography of ${selectCharacterFound.name}`}
            />
          </div>
          <article />
          <h2 className="characterDetails__title">
            {selectCharacterFound.name}
          </h2>
          <ul className="characterDetails__information">
            <li>
              Alternate name:{" "}
              {selectCharacterFound.alternateName.join(" or ")
                ? selectCharacterFound.alternateName.join(" or ")
                : " Adaba... This character does not have any alternate name"}
            </li>
            <li>
              Status:{" "}
              {selectCharacterFound.status ? (
                <i class="fa-solid fa-heart-pulse"></i>
              ) : (
                <i class="fa-solid fa-skull"></i>
              )}
            </li>
            <li>Specie: {selectCharacterFound.species}</li>
            <li>Gender: {selectCharacterFound.gender}</li>
            <li>House: {selectCharacterFound.house}</li>
            <img
              className="house"
              src={imgEachHouse[selectCharacterFound.house.toLocaleLowerCase()]}
              alt={selectCharacterFound.house}
            />
          </ul>
          <div>
            <form className="form" onSubmit={handleOnSubmit}>
              <label className="form__label">
                If you want to share with your Harry Potter's friends, here you
                have the magic link!
              </label>
              <input
                className="share"
                readOnly
                autoComplete="off"
                type="text"
                name="search"
                value={window.location}
              />
            </form>
          </div>
        </article>
      </section>
    </>
  ) : (
    <div className="divError">
      <p className="errorMsg">Character not found, please try again!</p>
      <Link className="linkErrorMsg" to={"/"}>
        <i className="fa-solid fa-angles-left"> Return home!</i>
      </Link>
    </div>
  );
};
export default CharacterDetail;
