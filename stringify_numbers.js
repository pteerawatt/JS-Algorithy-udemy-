// write a function that stringify all numbers in nested object

const stringifyNumbers = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === "number") obj[key] = JSON.stringify(obj[key]);
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) stringifyNumbers(obj[key]);
    }
    return obj
}