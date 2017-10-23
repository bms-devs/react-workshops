import React, {Component} from 'react'
import './App.css'
import Viewer from './Viewer'

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
                <Viewer color={this.colors[this.state.index]}
                        previousDisabled={this.getPreviousIndex() < 0}
                        nextDisabled={this.getNextIndex() >= this.colors.length}
                        onPreviousClick={() => this.handlePreviousClick()}
                        onNextClick={() => this.handleNextClick()} />
            </div>
        )
    }
}

export default App
