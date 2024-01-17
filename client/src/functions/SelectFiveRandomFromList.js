export default function SelectFiveRandomFromList(inputArray) {
    const randomList = [];
    for (let i = 0; randomList.length < 5; i++) {
        const randomNum = Math.floor(Math.random() * inputArray.length);
        if (!randomList.includes(inputArray[randomNum])) {
            randomList.push(inputArray[randomNum])
        }
    }
    return (randomList)
}