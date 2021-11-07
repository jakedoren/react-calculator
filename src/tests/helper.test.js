const { addNum, subtractNum, divideNum, multiplyNum, equalsValidator } = require('../helpers/helper') 

describe("Helper functions", () => {

    it("Should add two numbers", () => {
        expect(addNum(3,4)).toBe(7)
    })
    
    it("Should subtract two numbers", () => {
        expect(subtractNum(4,1)).toBe(3)
    })

    it("Should divide two numbers", () => {
        expect(divideNum(6,3)).toBe(2)
    })

    it("Should multiply two numbers", () => {
        expect(multiplyNum(3,3)).toBe(9)
    })
    
})