import CharacterCard from "./CharacterCard";
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
    <section>
      <ul className="list">{characterHtml}</ul>
      {errorMsg && (
        <p>
          There is not any character who has any coincidence with the following
          word {typedName}
        </p>
      )}
      <button className="btn" id="reset" onClick={handleReset}>
        Wow, maybe you should try again!
      </button>
    </section>
  );
};

export default CharacterList;
