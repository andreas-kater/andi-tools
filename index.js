const daysBetween = (date1, date2) => {
    if (!(date1 instanceof Date)) throw new Error('first variable provided is not a Date')
    if (!(date2 instanceof Date)) throw new Error('second variable provided is not a Date')
    return (date2 - date1) / 1000 / 3600 / 24
}

exports.daysBetween = daysBetween