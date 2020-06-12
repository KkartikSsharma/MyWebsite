import React, { Component } from 'react'
import reactlogo from './React.jpg'
import javaLogo from './Java.png'
import pythonLogo from './Python.png'
import gitLogo from './Git.jpg'

export default class Skill extends Component {
    render() {
        return (
            <div className="col-sm-12 xs-12 row">
                <div className="col-sm-3 xs-3 offset-sm-2">
                    <img src={reactlogo} style={{ width: 172 }} className="col-sm-6 xs-6" />
                    <img src={javaLogo} style={{ width: 172 }} className="col-sm-6 xs-6" />
                </div>

                <div className="col-sm-3 xs-3">
                    <img src={pythonLogo} style={{ width: 172 }} className="col-sm-6 xs-6" />
                    <img src={gitLogo} style={{ width: 172 }} className="col-sm-6 xs-6" />
                </div>
            </div>
        )
    }
}
