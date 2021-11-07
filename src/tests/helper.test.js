const { addNum, subtractNum, divideNum, multiplyNum, equalsValidator } = require('../helpers/helper') 

describe("Helper functions", () => {

    it("addNumb -> Should add two numbers", () => {
        expect(addNum(3,4)).toBe(7)
    })
    
    it("subtractNum -> Should subtract two numbers", () => {
        expect(subtractNum(4,1)).toBe(3)
    })

    it("divideNum -> Should divide two numbers", () => {
        expect(divideNum(6,3)).toBe(2)
    })

    it("multiplyNum -> Should multiply two numbers", () => {
        expect(multiplyNum(3,3)).toBe(9)
    })

    it("equalsValidator -> Should run the proper function",() => {
        expect(equalsValidator("add", 1, 2)).toBe(3)
        expect(equalsValidator("subtract", 5, 2)).toBe(3)
        expect(equalsValidator("divide", 6, 2)).toBe(3)
        expect(equalsValidator("multiply", 6, 5)).toBe(30)

    })
    
})