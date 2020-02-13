exports.daysBetween = (date1, date2) => {
    if (!(date1 instanceof Date)) { throw new Error(`first variable provided is not a Date`) }
    if (!(date2 instanceof Date)) { throw new Error(`second variable provided is not a Date`) }
    return (date2 - date1) / 1000 / 3600 / 24
}

exports.ddmmmyyyy = (date) => {
    if (!(date instanceof Date)) { throw new Error(`variable provided is not a Date`) }
    const months = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`]
    let dd = date.getDate()
    if (dd < 10) { dd = `0${dd}` }
    return `${dd} ${months[date.getMonth()]} ${date.getFullYear()}`
}

exports.dmmmyyyy = (date) => {
    if (!(date instanceof Date)) { throw new Error(`variable provided is not a Date`) }
    const months = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`]
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

exports.tomorrow = () => {
    let date = new Date()
    date.setDate(date.getDate() + 1)
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return date
}

