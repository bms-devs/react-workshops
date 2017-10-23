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

    getNextIndex() {
        return this.state.index + 1
    }

    getPreviousIndex() {
        return this.state.index - 1
    }

    handleNextClick() {
        this.setState({
            index: this.getNextIndex()
        })
    }

    handlePreviousClick() {
        this.setState({
            index: this.getPreviousIndex()
        })
    }

    render() {
        return (
            <div className="App">
                <div className="viewer" style={{backgroundColor: this.colors[this.state.index]}} />
                <button disabled={this.getPreviousIndex() < 0}
                        onClick={() => this.handlePreviousClick()}>Previous</button>
                <button disabled={this.getNextIndex() >= this.colors.length}
                        onClick={() => this.handleNextClick()}>Next</button>
            </div>
        )
    }
}

export default App
