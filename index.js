//Code your solutions in this file

const fiveToOneHundred = () => {
    for (let i = 5; i < 101; i++) {
        console.log(i)
    }
}
fiveToOneHundred()

const multiplesOfThree = () => {
    for (let i = 0; i < 101; i++) {
        console.log(i * 3)
    }
}

multiplesOfThree()

const multiplesOfThreeOrFive = () => {
    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i)
        }
    }
}
multiplesOfThreeOrFive()