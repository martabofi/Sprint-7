import React, { useEffect, useState } from "react";
import { useStarshipContext, Starship } from "../contexts/ShipsContext";

const StarshipList: React.FC = () => {
  const { starships, fetchStarships } = useStarshipContext();
  const [selectedStarship, setSelectedStarship] = useState<Starship | null>(
    null
  );

  const handleStarshipClick = (starship: Starship) => {
    setSelectedStarship(starship === selectedStarship ? null : starship);
  };

  useEffect(() => {
    fetchStarships();
  }, []);

  return (
    <div className="starships-list">
      <h1>Starships</h1>
      <ul>
        {starships.map((starship, index) => (
          <li key={index}>
            <div onClick={() => handleStarshipClick(starship)}>
              <h2>{starship.name}</h2>
              <h5>Model: {starship.model}</h5>
              {selectedStarship === starship && (
                <div>
                  <p>Manufacturer: {starship.manufacturer}</p>
                  <p>Cost in credits: {starship.cost_in_credits}</p>
                  <p>Length: {starship.length}</p>
                  <p>
                    Max Atmosphering Speed: {starship.max_atmosphering_speed}
                  </p>
                  <p>Crew: {starship.crew}</p>
                  <p>Passengers: {starship.passengers}</p>
                  <p>Cargo Capacity: {starship.cargo_capacity}</p>
                  <p>Consumables: {starship.consumables}</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <button className="starships-list-button"onClick={fetchStarships}>View more</button>
    </div>
  );
};

export default StarshipList;
