/*
    FUNCTION COMPONENT - rafce

    import React, { useState } from 'react'

    export default function AppClass() {
        const [counter, setCounter] = useState(0);

        const increase = () => {
            setCounter(counter+1);
        }
        return (
            <div>
                <h1>{counter}</h1>
                <button onClick={increase}>+1</button>
            </div>
        )
    };
*/

/* CLASS COMPONENT - rcc*/
import React, { Component } from 'react'

export default class AppClass extends Component {

    constructor(props){  // 클래스를 생성할 때 쓰임,생성자 method
        super(props)     // React.Component를 가리킴
        this.state = { // 현재 클래스 내부의 상태, 원하는 값 모두 넣어줌
            counter: 0,
            //value: 0,
        }
    }

    increase = () => {
        this.setState({
            counter: this.state.counter+1,
            //value: this.state.value+1,
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increase}>+1</button>
            </div>
        )
    }
}