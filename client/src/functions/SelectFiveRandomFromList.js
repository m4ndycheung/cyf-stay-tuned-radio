export default function SelectFiveRandomFromList(listOfSongs) {
    const randomList = [];
    for (let i = 0; i < 5; i++) {
        const randomNum = Math.floor(Math.random() * 5);
        randomList.push(listOfSongs[randomNum])
    }
    return (randomList)
}