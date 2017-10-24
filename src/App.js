import React, { Component } from 'react';
import Viewer from './Viewer'

class App extends Component {

  constructor() {
    super();
    this.images = [
      "http://bms.com.pl/wordpress/wp-content/themes/bms/dist/images/bms_logo_main.svg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
      "https://blog.zingchart.com/content/images/2016/06/react.png"
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
                image={this.images[this.state.index]}
                nextDisabled={(this.state.index + 1) === this.images.length}
                prevDisabled={this.state.index === 0}
        />
      </div>
    );
  }
}

export default App;
