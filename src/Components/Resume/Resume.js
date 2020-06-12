import React, { Component } from 'react'
import resume from './resume.png'
import resumepdf from './ResumePdf.pdf'
export default class Resume extends Component {
    render() {
        return (
            <div className="col-sm-8 xs-6 offset-sm-2 row">
                <a href={resumepdf} download><img src={resume} className="col-sm-6 xs-2" />Click here to download</a>
            </div>
        )
    }
}
