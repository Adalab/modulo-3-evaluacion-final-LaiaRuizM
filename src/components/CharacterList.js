import CharacterCard from "./CharacterCard";

const CharacterList = ({ characterList, typedName, errorMsg }) => {
  const characterHtml = characterList.map((eachCharacter) => {
    return (
      <CharacterCard
        eachCharacter={eachCharacter}
        key={eachCharacter.id}
      ></CharacterCard>
    );
  });

  return (
    <section>
      <ul>{characterHtml}</ul>
      {/* quizá poner entre <p> si necesito clase y ponerlo sin interpolar  */}
      {errorMsg &&
        `There is not any character who has any coincidence with the following
          word ${typedName}`}
    </section>
  );
};

export default CharacterList;
