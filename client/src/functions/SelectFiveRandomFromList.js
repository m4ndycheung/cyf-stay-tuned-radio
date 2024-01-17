export default function SelectFiveRandomFromList(listOfSongs) {
    const randomList = [];
    for (let i = 0; randomList.length < 5; i++) {
        const randomNum = Math.floor(Math.random() * listOfSongs.length);
        if (!randomList.includes(listOfSongs[randomNum])) {
            randomList.push(listOfSongs[randomNum])
        }
    }
    return (randomList)
}