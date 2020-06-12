import React, { Component } from 'react'
import './University.css'
import university from './PanjabUniversityLogo.jpg'
import school from './School.jpg'

export default class University extends Component {
    render() {
        return (
            <div className="col-sm-12 col-xs-12 container row" style={{ textAlign: "center" }}>
                <div className="col-sm-4 col-xs-12 card offset-1">
                    <div className=" col-sm-8 col-xs-12 text1">
                        <img className="col-sm-12 col-xs-12" src={university} />
                    </div>
                    <div className="col-sm-6 col-xs-6 offset-xs-3 text2" >
                        <table className="col-sm-12 col-xs-12">
                            <tr>
                                <td className="text-right">
                                    <strong>ECE:</strong>&nbsp;
                                </td>
                                <td className="text-left">
                                    7.56 CGPA
                                </td>
                            </tr>
                            <tr>
                                <td className="text-right">
                                    <strong>Pass Out:</strong>&nbsp;
                                </td>
                                <td className="text-left">
                                    May 2019
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="col-sm-4 col-xs-12 card offset-1">
                    <div className="col-sm-8 col-xs-12 text1">
                        <img className="col-sm-12 col-xs-12" src={school} />
                    </div>
                    <div className="col-sm-6 col-xs-6 offset-xs-3 text2">
                        <table className="col-sm-12 col-xs-12">
                            <tr>
                                <td className="text-right">
                                    <strong>12th Class:</strong>&nbsp;
                                </td>
                                <td className="text-left">
                                    94.6%
                                </td>
                            </tr>
                            <tr>
                                <td className="text-right">
                                    <strong>Pass Out:</strong>&nbsp;
                                </td>
                                <td className="text-left">
                                    Mar 2015
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
