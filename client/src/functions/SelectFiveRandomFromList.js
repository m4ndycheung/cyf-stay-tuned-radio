export default function SelectFiveRandomFromList() {
    const randomList = [];
    for (let i = 0; i < 5; i++) {
        const randomNum = Math.floor(Math.random() * 5);
        console.log(randomNum)
        randomList.push(listOfSongs[randomNum])
    }
    console.log(randomList)
}

const listOfSongs = [
    "Mr Brightside",
    "Sam's Town",
    "Jenny Was a Friend of Mine",
    "Read My Mind",
    "Bling",
    "Human",
    "Caution",
    "Spaceman",
    "When You Were Young",
    "This River is wild"
];