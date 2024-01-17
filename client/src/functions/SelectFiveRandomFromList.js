export default function SelectFiveRandomFromList(listOfSongs) {
    const randomList = [];
    for (let i = 0; i < 5; i++) {
        const randomNum = Math.floor(Math.random() * listOfSongs.length);
        randomList.push(listOfSongs[randomNum])
    }
    return (randomList)
}