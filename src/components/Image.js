import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

import { getImage } from '../actions/Calls'
import '../styles//Image.css';

class Image extends Component {
    state = {
        images: [],
        iArt: '',
        albumId: null,
        prev: null,
        next: null
    }

    getImage = (id) => {
        getImage(id).then(state => {
            this.setState({ ...state })
        })
    }

    componentDidMount() {
        const id = this.props.match.params.id
        getImage(id)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.match.params.id !== this.props.match.params.id) {
            const id = newProps.match.params.id
            getImage(id)
        }
    }

    render() {
        return (
            <div className="box">
                <div className="title">
                    <Link to={"/album/" + this.state.albumId} className="albumLink">&nbsp;&nbsp;Back to Album</Link>
                    <h1 className="imageTitle">{this.state.images.iName}</h1>
                </div>
                <div className="picBox">
                    <div className="lArr">
                        <Link to={"/image/" + this.state.prev}><FaArrowLeft /></Link>
                    </div>
                    <div className="imageBox">
                        <img src={this.state.iArt} alt={this.state.images.iName} id="picture" />
                    </div>
                    <div className="rArr">
                        <Link to={"/image/" + this.state.next} ><FaArrowRight /></Link>
                    </div>
                </div >
            </div>
        )
    }
}

export default Image
