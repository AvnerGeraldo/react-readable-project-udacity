export default (text) => {
    const textToUpper = text.toLowerCase()
    return textToUpper.slice(0,1).toUpperCase().concat(textToUpper.slice(1))
}