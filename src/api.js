const UserInputUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';
const gameNameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

export const createGameName = async () => {
  const gameName = 'Superheroes Rescue';
  const response = await fetch(gameNameUrl, {
    method: 'POST',
    body: JSON.stringify({"name": gameName}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
  });
  const gameData = await response.json();
  console.log(gameData);
  return gameData;
}
createGameName();