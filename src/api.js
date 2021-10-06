const UserInputUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ruHDIRMFOqc9EGWgck5G/scores/';
// const gameNameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';


// export const createGameName = async () => {
//   const gameName = 'Superheroes Rescue';
//   const response = await fetch(gameNameUrl, {
//     method: 'POST',
//     body: JSON.stringify({"name": gameName}),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//   });
//   const gameData = await response.json();
//   console.log(gameData);
//   return gameData;
// }

export const createUserAndScore = async (userName, scores) => {
      const response = await fetch(UserInputUrl, {
        method: 'POST',
        body: JSON.stringify({user: userName, score: scores}),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
      });
      const gameData = await response.json();
      console.log(gameData);
      return gameData;
}

export const createScoreboardHtml = (array) => {
  let namesAndScores = '';
  array.forEach((object) => {
    namesAndScores += `<div class="players-div">
    <p>${object.user}</p>
    <p class="players-score">${object.score}</p>
  </div>`
  });
  return namesAndScores;
}
