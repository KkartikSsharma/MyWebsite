import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div style={styles.topdiv}>
                <nav className="navbar navbar-expand-sm justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={styles.navbar}>Welcome to Kartik Sharma's Place</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

const styles = {
    navbar: {
        color: "#177acc",
        fontSize: "2em",
        fontWeight: "bold",
        fontFamily: "montserrat"
    },
    topdiv: {
        boxShadow: "0 2px 2px rgb(0, 0, 0, 0.15)"
    }
}
