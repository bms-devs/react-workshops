import React, {Component} from 'react'

class Viewer extends Component {

    render() {
        return (
            <div className="main-view">
                <div className="viewer"><img className="viewer" src={this.props.image} /></div>
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