import React, {Component} from 'react'

export default class List extends Component {

    getMiniatureClass(index) {
        const baseClass = "miniature";
        if (index === this.props.activeIndex)
            return baseClass + " active"
        else
            return baseClass
    }

    render() {
        const images = this.props.images
            .map((url, index) =>
                <img src={url} className={this.getMiniatureClass(index)} />)

        return (
            <div className="sidenav">
                <div className="miniatures-wrapper">
                    {images}
                </div>
            </div>
        )

    }
}