import CharacterCard from "./CharacterCard";

const CharacterList = ({ inputFiltered }) => {
  const characterHtml = inputFiltered.map((eachCharacter) => {
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
    </section>
  );
};

export default CharacterList;
