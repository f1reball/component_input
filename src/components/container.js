import React, { Component } from 'react'
import './container.css'

import Box from './box'

class Container extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        };
    }
    
    render() {
        return(
            <div class="container">
                {this.state.list.map(item => (
                    <Box text={item}/>
                ))}

            </div>
        )
    }
}

export default Container