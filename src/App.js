import React, {Component} from 'react'
import './App.css'

class App extends Component {

    constructor() {
        super()
        this.colors = [
            "red",
            "green",
            "blue",
            "black",
            "yellow"
        ]
        this.state = {
            index: 0
        }
    }

    handleNextClick() {
        this.setState({
            index: this.state.index + 1
        })
    }

    render() {
        return (
            <div className="App">
                <div className="viewer" style={{backgroundColor: this.colors[this.state.index]}} />
                <button onClick={() => this.handleNextClick()}>Next</button>
            </div>
        )
    }
}

export default App
