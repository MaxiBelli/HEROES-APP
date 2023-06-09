import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  if (!publisher) {
    return heroes; // Return all heroes when no publisher is specified
  }

  const validPublishers = ["DC Comics", "Marvel Comics"];
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }
  // Filter the heroes array based on the publisher and return the filtered results
  return heroes.filter((hero) => hero.publisher === publisher);
};
