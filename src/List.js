import React, {Component} from 'react'

export default class List extends Component {

    render() {
        return (
            <div className="sidenav">
                <div className="miniatures-wrapper">
                    {this.props.images
                        .map(url => <img src={url} className="miniature" />)}
                </div>
            </div>
        )

    }
}