import { Link } from "react-router-dom";
import "../styles/layouts/CharacterCard.scss";
const CharacterCard = ({ eachCharacter }) => {
  return (
    <li>
      <Link className="card__link" to={`/character/${eachCharacter.id}`}>
        <li className="card">
          <img
            className="character__img"
            src={eachCharacter.photo}
            alt={`Photography of ${eachCharacter.name}`}
            title={`Photography of ${eachCharacter.name}`}
          />
          <h4 className="card__title">{eachCharacter.name}</h4>
          <p className="card__p">{eachCharacter.species}</p>
        </li>
      </Link>
    </li>
  );
};

export default CharacterCard;
