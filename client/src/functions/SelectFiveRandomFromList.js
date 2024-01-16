export default function SelectFiveRandomFromList(listOfSongs) {
    const randomList = [];
    for (let i = 0; i < 5; i++) {
        const randomNum = Math.floor(Math.random() * 5);
        console.log(randomNum)
        randomList.push(listOfSongs[randomNum])
    }
    console.log(randomList)
}