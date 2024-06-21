import React, { Component } from 'react'
import './Calculator.css';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
          input: "",
        };
      }    
      handleClick=(event)=>{
        this.setState({
          input: this.state.input+event.target.name
        });
      }
      handleClear=()=>{
        this.setState({
            input: ""
        });
      }
      handleBackspace=()=>{
        this.setState({
          input:this.state.input.slice(0, -1)
        });
      }    
      handleCalculate=()=>{
        try {
          this.setState({
            input:eval(this.state.input).toString()
          });
        } 
        catch (error) {
          this.setState({
            input:"Error"
          });
        }
      }        
  render() {
    return (
      <div className='calculator'>
        <div className="screen">{this.state.input}</div>
        <div className='keypad'>
        <button name='AC' onClick={this.handleClear}>AC</button>
        <button name='C' onClick={this.handleBackspace}>C</button>
        <button name='%' onClick={this.handleClick}>%</button>
        <button name='/' onClick={this.handleClick}>/</button>
        <button name='7' onClick={this.handleClick}>7</button>
        <button name='8' onClick={this.handleClick}>8</button>
        <button name='9' onClick={this.handleClick}>9</button>
        <button name='*' onClick={this.handleClick}>*</button>
        <button name='4' onClick={this.handleClick}>4</button>
        <button name='5' onClick={this.handleClick}>5</button>
        <button name='6' onClick={this.handleClick}>6</button>
        <button name='-' onClick={this.handleClick}>-</button>
        <button name='1' onClick={this.handleClick}>1</button>
        <button name='2' onClick={this.handleClick}>2</button>
        <button name='3' onClick={this.handleClick}>3</button>
        <button name='+' onClick={this.handleClick}>+</button>
        <button name='0' onClick={this.handleClick}>0</button>
        <button name='=' onClick={this.handleCalculate}>=</button>
        </div>
      </div>
    )
  }
}
export default Calculator



