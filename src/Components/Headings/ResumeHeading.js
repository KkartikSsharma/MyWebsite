import React, { Component } from 'react'

export default class ResumeHeading extends Component {
    render() {
        return (
            <div className="col-sm-12 col-xs-12 row">
                <div className="col-sm-10 col-xs-12 offset-sm-1" style={styling.heading}>
                    RESUME
                </div>
            </div>
        )
    }
}

const styling = {
    heading: {
        textAlign: "left",
        fontWeight: "bold",
        fontSize: "2em",
        marginTop: "2em"
    }
}
