import React, { Component } from 'react'
import image from './ProfilePic.JPG'

export default class PhotoAndDescription extends Component {
    render() {
        return (
            <div className="col-sm-12 col-xs-12 row" style={styles.maindiv}>
                <div className="col-sm-6 col-xs-12" style={styles.seconddiv}>
                    <img className="col-sm-8 col-xs-12" src={image} style={styles.image} />
                </div>
                <div className="col-sm-6 col-xs-12" style={styles.description}>
                    An IT professional graduated from one of the best universities in India with 1 year of experience in Java, Python and React. Have good knowledge of Data structures and algorithms.
                </div>
            </div>
        )
    }
}

const styles = {
    maindiv: {
        padding: 0,
        margin: 0,
        marginTop: '2vh'
    },
    seconddiv: {
        padding: 0,
        margin: 0,
        marginTop: '2vh'
    },
    description: {
        padding: 0,
        margin: 0,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: "20px",
        marginTop: "15%",
    },
    image: {
        borderRadius: "50%"
    }
}
