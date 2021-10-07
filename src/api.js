const UserInputUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6EmebEW7wM2xYh8nSnXs/scores/';
const gameNameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const createGameName = async () => {
  const gameName = 'Superheroes Rescue';
  const response = await fetch(gameNameUrl, {
    method: 'POST',
    body: JSON.stringify({ name: gameName }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const gameData = await response.json();
  return gameData;
};

createGameName();

export const createUserAndScore = async (userName, scores) => {
  const response = await fetch(UserInputUrl, {
    method: 'POST',
    body: JSON.stringify({ user: userName, score: scores }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const gameData = await response.json();
  return gameData;
};

const createScoreboardHtml = (array, container) => {
  let namesAndScores = '';
  array.forEach((object) => {
    namesAndScores += `<div class="players-div">
    <p>${object.user}</p>
    <p class="players-score">${object.score}</p>
  </div>`;
  });
  container.innerHTML = namesAndScores;
};

export const fetchFromApi = async (container) => {
  const response = await fetch(UserInputUrl);
  const gameData = await response.json();
  const scoreBoardArray = gameData.result.sort((a, b) => (b.score - a.score ));
  createScoreboardHtml(scoreBoardArray, container);
};

fetchFromApi(document.querySelector('.scoreboard'));