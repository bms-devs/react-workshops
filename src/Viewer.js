import React, {Component} from 'react'

class Viewer extends Component {

    render() {
        return (
            <div>
                <div className="viewer" style={{backgroundColor: this.props.color}} />
                <button onClick={() => this.props.onPrevClick()}
                        disabled={this.props.prevDisabled}>
                    Poprzedni
                </button>
                <button onClick={() => this.props.onNextClick()}
                        disabled={this.props.nextDisabled}>
                    Następny
                </button>
            </div>
        )
    }
}

export default Viewer