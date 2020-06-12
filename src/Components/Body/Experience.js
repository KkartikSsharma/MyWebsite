import React, { Component } from 'react'
import stanchart from './StanChart.jpg'
import growVation from './GLogo.png'

export default class Experience extends Component {
    render() {
        return (
            <div className="col-sm-12 xs-12 row" style={styles.mainDiv}>
                <div className="col-sm-3 xs-9 offset-3" style={styles.description}>
                    <table>
                        <tr>
                            <td>
                                <strong>Designation:</strong>&nbsp;
                            </td>
                            <td>
                                Analyst
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Joining Date:</strong>&nbsp;
                            </td>
                            <td>
                                Jun 2019
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="col-sm-6 xs-12" style={styles.secondDiv}>
                    <img src={stanchart} style={{ width: 300 }} />
                </div>
                <div className="col-sm-3 xs-9 offset-3" style={styles.description}>
                    <table>
                        <tr>
                            <td>
                                <strong>Designation:</strong>&nbsp;
                            </td>
                            <td>
                                Intern
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Joining Date:</strong>&nbsp;
                            </td>
                            <td>
                                Jan 2019
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Leaving Date:</strong>&nbsp;
                            </td>
                            <td>
                                May 2019
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="col-sm-6 xs-12" style={styles.secondDiv}>
                    <img className="col-sm-12 xs-12" src={growVation} style={{ width: 200 }} />
                </div>
            </div>
        )
    }
}

const styles = {
    mainDiv: {
        padding: 0,
        marginTop: '2vh'
    },
    description: {
        padding: 0,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: "20px",
        marginTop: "10%",
        marginBottom: "1em"
    },
    secondDiv: {
        padding: 0,
        marginBottom: "1em"
    }
}
