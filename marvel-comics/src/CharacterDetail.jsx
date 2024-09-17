//Task 2: Create Route Components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CharacterDetail.css'; // Importing CSS file

const CharacterDetail = ({ characterId }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      if (characterId) {
        try {
          const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=e481bb9e6a2b0a324b5350eb80cd9161&hash=85fce66c497a41e604a7a57dbec56442`);
          setCharacter(response.data.data.results[0]);
        } catch (error) {
          console.error("Error fetching character details:", error);
        }
      }
    };

    fetchCharacterDetail();
  }, [characterId]);

  if (!character) return <div className="detail-placeholder">Select a character to see details</div>;

  return (
    <div className="character-detail">
      <h2>{character.name}</h2>
      <p>{character.description || "No description available"}</p>
      <h3>Comics:</h3>
      <ul>
        {character.comics.items.map(comic => (
          <li key={comic.resourceURI}>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;
