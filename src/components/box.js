import React, { Component } from 'react'
import './box.css'

class Box extends Component {
    render() {
        return (
            <div class="box">
                <h1>{this.props.text}</h1>
            </div>
        )
    }
}

export default Box