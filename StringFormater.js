function cleanText(text) {
    const trimText = text.trim()
    return trimText
}

function capitalize(text) {
    const upperCase =  text.toUpperCase()
    return upperCase
}

function formatDisplayName(firstName, lastName) {
    trimedText = `${cleanText(firstName)} ${cleanText(lastName)}`
    return `${capitalize(trimedText)}`
}

console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));