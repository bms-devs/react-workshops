import React, {Component} from 'react'

export default class Viewer extends Component {

    render() {
        return (
            <div className="main-view">
                <img className="viewer" src={this.props.imageUrl} />
                <div className="button-wrapper">
                    <button disabled={this.props.previousDisabled}
                    onClick={this.props.onPreviousClick}>Previous</button>
                    <button disabled={this.props.nextDisabled}
                            onClick={this.props.onNextClick}>Next</button>
                </div>
            </div>
        )
    }
}