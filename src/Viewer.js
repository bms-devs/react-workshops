import React, {Component} from 'react'

export default class Viewer extends Component {

    render() {
        return (
            <div>
                <div className="viewer" style={{backgroundColor: this.props.color}} />
                <button disabled={this.props.previousDisabled}
                onClick={this.props.onPreviousClick}>Previous</button>
                <button disabled={this.props.nextDisabled}
                        onClick={this.props.onNextClick}>Next</button>
            </div>
        )
    }
}