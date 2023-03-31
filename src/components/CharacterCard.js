import { Link } from "react-router-dom";
import "../styles/layouts/CharacterCard.scss";
const CharacterCard = ({ eachCharacter }) => {
  return (
    <Link className="list__link" to={`/character/${eachCharacter.id}`}>
      <li className="list__li">
        <span className="span">DETAILS⚡️</span>
        <div className="div">
          <img
            className="img"
            src={eachCharacter.photo}
            alt={`Photography of ${eachCharacter.name}`}
            title={`Photography of ${eachCharacter.name}`}
          />
        </div>
        <h4 className="list__title">{eachCharacter.name}</h4>
        <p className="list__p">{eachCharacter.species}</p>
      </li>
    </Link>
  );
};

export default CharacterCard;
