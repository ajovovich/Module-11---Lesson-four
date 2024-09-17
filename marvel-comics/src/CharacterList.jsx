//Task 2: Create Route Components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CharacterList.css'; // Importing CSS file

const CharacterList = ({ onCharacterClick }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e481bb9e6a2b0a324b5350eb80cd9161&hash=85fce66c497a41e604a7a57dbec56442`);
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="character-grid">
      {characters.map(character => (
        <div key={character.id} className="character-card" onClick={() => onCharacterClick(character.id)}>
          <h3>{character.name}</h3>
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
