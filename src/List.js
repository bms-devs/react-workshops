import React, {Component} from 'react'

export default class List extends Component {

    render() {
        const images = this.props.images
            .map((url, index) => <p>{index + 1}: {url}</p>)

        return (
            <div className="sidenav">
                {images}
            </div>
        )

    }
}