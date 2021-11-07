exports.addNum = (a, b) => {
    return a + b
}

exports.subtractNum = (a, b) => {
    return a - b
}

exports.multiplyNum = (a, b) => {
    return a * b
}

exports.divideNum = (a, b) => {
    return a / b
}

exports.equalsValidator = (operatorRequested, num1, num2) => {
    switch (operatorRequested) {
        case "add": {
            const total = this.addNum(num1, num2)
            return total
        }
        case "subtract": {
            const total = this.subtractNum(num1, num2)
            return total
        }
        case "divide": {
            const total = this.divideNum(num1, num2)
            return total
        }
        case "multiply": {
            const total = this.multiplyNum(num1, num2)
            return total
        }
    }
}


