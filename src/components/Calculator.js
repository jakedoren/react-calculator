import React, { useState, useEffect } from 'react'
import { equalsValidator } from '../helpers/helper.js'

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

    const handleNumbKeyClick = (e) => {
        const value = e.target.innerText
        if(!onSecondNumber) {
            setNumbersUsed((prevState) => ({
                ...numbersUsed, firstNumber: prevState.firstNumber + value
            }))
        } else {
            setNumbersUsed((prevState) => ({
                ...numbersUsed, secondNumber: prevState.secondNumber + value
            }))
        }
    }

    useEffect(() => {
        const numbs = document.querySelectorAll('.number-key')
        numbs.forEach((num) => {
            num.addEventListener('click', handleNumbKeyClick)
        })
        return () => {
            numbs.forEach((num) => {
                num.removeEventListener('click', handleNumbKeyClick)
            })
        }
    }, [handleNumbKeyClick])

    return (
        <form>
            <h1>{total}</h1>
            <div onClick={(e) => handleOperator(e)} name="add" >+</div>
            <p onClick={(e) => handleOperator(e)} name="subtract" >-</p>
            <p onClick={(e) => handleOperator(e)} name="divide" >/</p>
            <p onClick={(e) => handleOperator(e)} name="multiply" >x</p>
            <p onClick={(e) => equalsOperator(e)} >=</p>
            <p onClick={e => handleClear(e)} >Clear</p>
            <span className="number-key">1</span>
            <br></br>
            <span className="number-key">2</span>
            <br></br>
            <span className="number-key">3</span>
            <br></br>
            <span className="number-key">4</span>
            <br></br>
            <span className="number-key">5</span>
            <br></br>
            <span className="number-key">6</span>
            <br></br>
            <span className="number-key">7</span>
            <br></br>
            <span className="number-key">8</span>
            <br></br>
            <span className="number-key">9</span>
            <br></br>
            <br></br>
            {numbersUsed.firstNumber}
            <span>{operatorRequested}</span>
            {numbersUsed.secondNumber}
            <input onChange={(e) => handleChange(e)} name={onSecondNumber ? "secondNumber" : "firstNumber"} placeholder="firstNumb" value={onSecondNumber ? numbersUsed.secondNumber : numbersUsed.firstNumber}></input> 
        </form>
    )
}

export default Calculator
