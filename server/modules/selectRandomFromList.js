const selectRandomFromList = function (inputArray, amount) {
  const randomList = [];
  for (let i = 0; randomList.length < amount; i++) {
    const randomNum = Math.floor(Math.random() * inputArray.length);
    if (!randomList.includes(inputArray[randomNum])) {
      randomList.push(inputArray[randomNum]);
    }
  }
  //data needs to be in the format of array of strings. The string format needs to be in the format of: spotify:track:track_id
  const randomListFormtted = randomList.map((item) => {
    return `spotify:track:${item.spotify_song_id}`
  })
  return randomListFormtted;
};

module.exports = selectRandomFromList;
