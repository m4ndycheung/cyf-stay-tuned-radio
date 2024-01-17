export default function SelectRandomFromList(inputArray, amount) {
    const randomList = [];
    for (let i = 0; randomList.length < amount; i++) {
        const randomNum = Math.floor(Math.random() * inputArray.length);
        if (!randomList.includes(inputArray[randomNum])) {
            randomList.push(inputArray[randomNum])
        }
    }
    return (randomList)
}