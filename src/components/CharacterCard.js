import { Link } from "react-router-dom";
const CharacterCard = ({ eachCharacter }) => {
  return (
    <li>
      <Link to={`/character/${eachCharacter.id}`}>
        <img
          src={eachCharacter.photo}
          alt={`Photography of ${eachCharacter.name}`}
          title={`Photography of ${eachCharacter.name}`}
        />
        <h4>{eachCharacter.name}</h4>
        <p>{eachCharacter.species}</p>
      </Link>
    </li>
  );
};

export default CharacterCard;
