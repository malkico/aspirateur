const {rotation, deplacer, checkDimension} = require("../src/functions")
const { aspirateur } = require("../src/index")
const cases = require("../assets/cases.json")

test("rotation", () => {
    expect(rotation("N","D")).toBe("E")
    expect(rotation("N","G")).toBe("W")
    expect(rotation("E","D")).toBe("S")
    expect(rotation("E","G")).toBe("N")
    expect(rotation("W","D")).toBe("N")
    expect(rotation("W","G")).toBe("S")
    expect(rotation("S","D")).toBe("W")
    expect(rotation("S","G")).toBe("E")
})

test("deplacement", () => {
    expect(deplacer({x:1, y:1}, "N")).toEqual({x:1, y:2})
    expect(deplacer({x:1, y:1}, "E")).toEqual({x:2, y:1})
    expect(deplacer({x:1, y:1}, "W")).toEqual({x:0, y:1})
    expect(deplacer({x:1, y:1}, "S")).toEqual({x:1, y:0})
})

test("dimension", () => {
    expect(checkDimension({x:9, y:9}, {initX:10, initY:10})).toBe(true)
    expect(checkDimension({x:10, y:9}, {initX:10, initY:10})).toBe(false)
    expect(checkDimension({x:9, y:10}, {initX:10, initY:10})).toBe(false)
    expect(checkDimension({x:10, y:10}, {initX:10, initY:10})).toBe(false)
    expect(checkDimension({x:1, y:1}, {initX:10, initY:10})).toBe(true)
    expect(checkDimension({x:1, y:0})).toBe(false)
    expect(checkDimension({x:0, y:1})).toBe(false)
    expect(checkDimension({x:0, y:0})).toBe(false)
})

const result = aspirateur(cases[0].dimension, cases[0].positionInit, cases[0].instructions)
test("aspirateur" , () => {
    expect(result).toEqual(cases[0].positionFinale)
})