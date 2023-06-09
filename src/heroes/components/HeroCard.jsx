import React from "react";
import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
  // Check if the alter ego is the same as the characters
  // If they are the same, return null to not render the component
  // Otherwise, render a paragraph with the characters
  return alter_ego === characters ? null : <p>{characters}</p>;
};

export const HeroCard = ({
  hero: { id, superhero, publisher, alter_ego, first_appearance, characters },
  showPublisher,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  let publisherText = "";

  // Check if the publisher should be shown
  if (showPublisher) {
    // Assign the appropriate publisher text based on the publisher value
    if (publisher === "Marvel Comics") {
      publisherText = "(Marvel)";
    } else if (publisher === "DC Comics") {
      publisherText = "(DC)";
    }
  }

  return (
    <div className="col animate__animated animate__zoomIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} className="card-img" alt={superhero} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">
                {superhero} {publisherText}
              </h5>
              <p className="card-text">{alter_ego}</p>

              <CharactersByHero characters={characters} alter_ego={alter_ego} />

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>More Info..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
