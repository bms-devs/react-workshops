import React, {Component} from 'react'
import './App.css'
import Viewer from './Viewer'

class App extends Component {

    constructor() {
        super()
        this.images = [
            "http://bms.com.pl/wordpress/wp-content/themes/bms/dist/images/bms_logo_main.svg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
            "https://blog.zingchart.com/content/images/2016/06/react.png"
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
                <Viewer imageUrl={this.images[this.state.index]}
                        previousDisabled={this.getPreviousIndex() < 0}
                        nextDisabled={this.getNextIndex() >= this.images.length}
                        onPreviousClick={() => this.handlePreviousClick()}
                        onNextClick={() => this.handleNextClick()} />
            </div>
        )
    }
}

export default App
