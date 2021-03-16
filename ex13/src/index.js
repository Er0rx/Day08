function randomRangeNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (minNumber - maxNumber + 1)) + minNumber
}

randomRangeNumber(10, 30);

module.exports = randomRangeNumber;
