const { daysBetween } = require('./index')

test('two days apart', () => {
    const date1 = new Date(2020, 1, 1)
    const date2 = new Date(2020, 1, 3)
    expect(daysBetween(date1, date2)).toBe(2)
})

test('two and a half days apart', () => {
    const date1 = new Date(2020, 1, 1, 1)
    const date2 = new Date(2020, 1, 3, 13)
    expect(daysBetween(date1, date2)).toBe(2.5)
})

test('supply string', () => {
    const date1 = 'this is a string'
    const date2 = new Date(2020, 1, 3, 13)
    expect(() => daysBetween(date1, date2)).toThrow(Error)
})

test('supply number', () => {
    const date1 = new Date(2020, 1, 1, 1)
    const date2 = 123
    expect(() => daysBetween(date1, date2)).toThrow(Error)
})