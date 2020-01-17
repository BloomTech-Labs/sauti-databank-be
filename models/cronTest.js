let testNumber = 0

const addOne = () => {
    testNumber += 1
    console.log('This is how many times the cron job ran', testNumber)
    return testNumber
}
