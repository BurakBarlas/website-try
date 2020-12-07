import React, { Component } from 'react'

class ClassClick extends Component {
    ClickHandler() {
        console.log('Clicked button')
    }
    render() {
        return (
            <div>
                <button onClick={this.ClickHandler}> click on me</button>
            </div>
        )
    }
}

export default ClassClick
