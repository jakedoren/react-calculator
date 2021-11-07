import React, { useState, useEffect } from 'react'
import { addNum, divideNum, multiplyNum, subtractNum, equalsValidator } from '../helpers/helper.js'

const Calculator = () => {
    const [total, setTotal] = useState()
    const [numbersUsed, setNumbersUsed] = useState({
        firstNumber: '',
        secondNumber: ''
    })
    const [onSecondNumber, setOnSecondNumber] = useState(false)
    const [operatorRequested, setOperatorRequested] = useState()
    
    const handleChange = (e) => {
        setNumbersUsed({
            ...numbersUsed, [e.target.name] : e.target.value
        })
    }

    const handleOperator = (e) => {
        e.preventDefault()
        const origin = e.target.getAttribute("name")
        setOperatorRequested(origin)
        if(numbersUsed.firstNumber !== '') {
            setOnSecondNumber(true)
        }
    }

    const equalsOperator = (e) => {
        e.preventDefault()
        const num1 = parseInt(numbersUsed.firstNumber)
        const num2 = parseInt(numbersUsed.secondNumber)
        const total = equalsValidator(operatorRequested, num1, num2);
        setTotal(total)
        setNumbersUsed({
            firstNumber : total, secondNumber : ''
        })
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
