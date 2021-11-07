import React, { useState, useEffect } from 'react'
import { addNum, divideNum, multiplyNum, subtractNum } from '../helpers/helper.js'

const Calculator = () => {
    const [total, setTotal] = useState()
    const [numbersUsed, setNumbersUsed] = useState({
        firstNumber: '',
        secondNumber: ''
    })
    const [onSecondNumber, setOnSecondNumber] = useState(false)
    const [operatorRequested, setOperatorRequested] = useState()
    
    const handleChange = (e) => {
        // if(numbersUsed.firstNumber == '') {
        //     setNumbersUsed({
        //         firstNumber: e.target.value
        //     })
        // }
        // if(numbersUsed != '') {
        //     setNumbersUsed({
        //         ...numbersUsed, secondNumber : e.target.value
        //     })
        // }

        setNumbersUsed({
            ...numbersUsed, [e.target.name] : e.target.value
        })
    }

    const handleOperator = (e) => {
        e.preventDefault()
        const num1 = parseInt(numbersUsed.firstNumber)
        const num2 = parseInt(numbersUsed.secondNumber)
        const origin = e.target.getAttribute("name")

        setOperatorRequested(origin)

        if(numbersUsed.firstNumber !== '') {
            setOnSecondNumber(true)
        }

        // if(numbersUsed.firstNumber !== '') {
        //     setNumbersUsed({
        //         ...numbersUsed, secondNumber : document.getElementById("numb").value
        //     })
        // }

        // if(numbersUsed.firstNumber == '') {
        //     console.log(e.target)
        //     setNumbersUsed({
        //         firstNumber: e.target.value
        //     })
        // } else if (numbersUsed.firstNumber !== '' && numbersUsed.secondNumber == '') {
        //     setNumbersUsed({
        //         ...numbersUsed, secondNumber: e.target.value
        //     })
        // } else {
        //     setNumbersUsed({
        //         ...numbersUsed, secondNumber: e.target.value
        //     })
        // }

        // if(origin === "add") {
        //     const sum = addNum(num1, num2)
        //     console.log(num1, num2)
        //     setTotal(sum)
        // }
        // if(origin === "subtract") {
        //     const total = subtractNum(num1, num2)
        //     setTotal(total)
        // }
        // if(origin === "divide") {
        //     const total = divideNum(num1, num2)
        //     setTotal(total)
        // }
        // if(origin === "multiply") {
        //     const total = multiplyNum(num1, num2)
        //     setTotal(total)
        // }
    }

    const equalsOperator = (e) => {
        e.preventDefault()
        const num1 = parseInt(numbersUsed.firstNumber)
        const num2 = parseInt(numbersUsed.secondNumber)
        if(operatorRequested === "add") {
            const sum = addNum(num1, num2)
            console.log(num1, num2)
            setTotal(sum)
            setNumbersUsed({
                firstNumber : sum
            })
        }
        if(operatorRequested === "subtract") {
            const total = subtractNum(num1, num2)
            setTotal(total)
            setNumbersUsed({
                firstNumber : total
            })
        }
        if(operatorRequested === "divide") {
            const total = divideNum(num1, num2)
            setTotal(total)
            setNumbersUsed({
                firstNumber : total
            })
        }
        if(operatorRequested === "multiply") {
            const total = multiplyNum(num1, num2)
            setTotal(total)
            setNumbersUsed({
                firstNumber : total
            })
        }
    }

    const handleClear = () => {
        setTotal('')
        setNumbersUsed({ firstNumber: '', secondNumber: '' })
        setOnSecondNumber(false)
    }

    return (
        <form>
            <h1>{total}</h1>
            <div onClick={(e) => handleOperator(e)} name="add" >+</div>
            <p onClick={(e) => handleOperator(e)} name="subtract" >-</p>
            <p onClick={(e) => handleOperator(e)} name="divide" >/</p>
            <p onClick={(e) => handleOperator(e)} name="multiply" >x</p>
            <p onClick={(e) => equalsOperator(e)} >=</p>
            <p onClick={e => handleClear(e)} >Clear</p>
            <span>1</span>
            <br></br>
            <span>2</span>
            <br></br>
            <span>3</span>
            <br></br>
            <span>4</span>
            <br></br>
            <span>5</span>
            <br></br>
            <span>6</span>
            <br></br>
            <span>7</span>
            <br></br>
            <span>8</span>
            <br></br>
            <span>9</span>
            <br></br>
            <br></br>
            {numbersUsed.firstNumber}
            <span>+</span>
            {numbersUsed.secondNumber}
            <input onChange={(e) => handleChange(e)} name={onSecondNumber ? "secondNumber" : "firstNumber"} placeholder="firstNumb" value={onSecondNumber ? numbersUsed.secondNumber : numbersUsed.firstNumber}></input> 
        </form>
    )
}

export default Calculator
