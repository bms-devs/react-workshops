import React, { Component } from 'react';
import Viewer from './Viewer'

class App extends Component {

  constructor() {
    super();
    this.colors = [
        "red",
        "blue",
        "yellow",
        "green"
    ];
    this.state = {
      index: 0
    }
  }

  handleNextClick() {
    this.setState({
        index: this.state.index + 1
    })
  }

  handlePrevClick() {
      this.setState({
          index: this.state.index - 1
      })
  }

  render() {
    return (
      <div className="app">
        <Viewer onNextClick={() => this.handleNextClick()}
                onPrevClick={() => this.handlePrevClick()}
                color={this.colors[this.state.index]}
                nextDisabled={(this.state.index + 1) === this.colors.length}
                prevDisabled={this.state.index === 0}
        />
      </div>
    );
  }
}

export default App;
