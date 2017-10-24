import React, { Component } from 'react';

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
        <div className="viewer" style={{ backgroundColor: this.colors[this.state.index] }} />
        <button onClick={() => this.handlePrevClick()}
                disabled={this.state.index === 0} >
          Poprzedni
        </button>
        <button onClick={() => this.handleNextClick()}
                disabled={(this.state.index + 1) === this.colors.length} >
          Następny
        </button>
      </div>
    );
  }
}

export default App;
