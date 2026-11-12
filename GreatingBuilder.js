function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`
}

function getGreating(timeOfDay) {
    return `Good ${timeOfDay}`
}

function createGreating(firstName, lastName, timeOfDay) {
    const formatedName = formatName(firstName, lastName)
    const greating = getGreating(timeOfDay)

    return `${greating}, ${formatedName}`
}

console.log(createGreating('Ramadhan', 'Zakki', 'Night'))