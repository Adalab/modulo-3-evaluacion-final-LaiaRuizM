import CharacterCard from "./CharacterCard";
// import Loader from "./Loader";
import "../styles/layouts/CharacterList.scss";

const CharacterList = ({
  characterList,
  typedName,
  errorMsg,
  handleTypedName,
}) => {
  const handleReset = (ev) => {
    ev.preventDefault();
    handleTypedName(ev.target.value);
  };
  const characterHtml = characterList.map((eachCharacter) => {
    return (
      <CharacterCard
        eachCharacter={eachCharacter}
        key={eachCharacter.id}
      ></CharacterCard>
    );
  });

  // const isNotFound = characterHtml
  // const renderL = loading ? <Loader></Loader> : <ul>{characterHtml}</ul>

  return (
    <div>
      {/* <Loader></Loader> */}
      <section>
        <ul className="ulList">{characterHtml}</ul>
        {/* quizá poner entre <p> si necesito clase y ponerlo sin interpolar  */}
        {/* <Loader></Loader> */}
        {errorMsg &&
          `There is not any character who has any coincidence with the following
          word ${typedName}`}
        <button className="btn" id="reset" onClick={handleReset}>
          Wow, maybe you should try again!
        </button>
      </section>
    </div>
  );
};

export default CharacterList;
