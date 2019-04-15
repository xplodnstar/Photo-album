import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

// import axios from 'axios'
import { getImage } from '../actions/Calls'
import '../styles//Image.css';

class Image extends Component {
    state = {
        images: [],
        // id: 0,
        // url: '',
        // name: '',
        iArt: '',
        albumId: null,
        // current: '',
        prev: null,
        next: null
    }

    getImage = (id) => {
        getImage(id).then(state => {
            this.setState({ ...state })
        })
        // axios.get(`http://localhost:3001/images/${id}`).then(resp => {
        //     this.setState({
        //         url: resp.data.url,
        //         name: resp.data.name,
        //         albumId: resp.data.albumId,
        //         imageId: resp.data.id,
        //     })

        //     this.getAlbum(resp.data.albumId).then(images => {
        //         const currentIndex = images.findIndex(item => item.id === Number(id))
        //         // const current = images[currentIndex].url
        //         let prevIndex, nextIndex

        //         if (currentIndex === 0) {
        //             prevIndex = 0
        //             // prevIndex = images.length - 1
        //         } else {
        //             prevIndex = currentIndex - 1
        //         }

        //         if (currentIndex === images.length - 1) {
        //             nextIndex = images.length - 1
        //             // nextIndex = 0
        //         } else {
        //             nextIndex = currentIndex + 1
        //         }

        //         const prev = images[prevIndex].id
        //         const next = images[nextIndex].id

        //         this.setState({
        //             prev: prev,
        //             next: next
        //         })
        //     })
        // })
    }

    // getAlbum = (albumId) => {
    //     return new Promise((resolve, reject) => {
    //         axios.get(`http://localhost:3001/images?albumId=${this.state.albumId}`).then(resp => {
    //             resolve(resp.data)
    //         })
    //     })
    // }

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
