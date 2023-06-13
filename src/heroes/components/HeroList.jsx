import React from "react";
import { HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {
  // Get the list of heroes based on the provided publisher or all heroes if no publisher is provided
  const heroes = getHeroesByPublisher(publisher || null);

  // Determine whether to show the publisher in the hero cards
  const showPublisher = !publisher;

  // Sort the heroes alphabetically by superhero name
  heroes.sort((a, b) => a.superhero.localeCompare(b.superhero));

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-2">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} showPublisher={showPublisher} />
      ))}
    </div>
  );
};
