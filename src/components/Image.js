import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

import axios from 'axios'
import '../styles//Image.css';

class Image extends Component {
    state = {
        images: [],
        id: 0,
        url: '',
        name: '',
        albumId: '',
        current: 0,
        prev: '',
        next: ''
    }

    // current = image index. 
    // prev/next is +- 1. 
    // Need to translate index no to id for use in link.
    // create left and right stops

    getImage = (id) => {
        axios.get(`http://localhost:3001/images/${id}`).then(resp => {
            this.setState({
                url: resp.data.url,
                name: resp.data.name,
                albumId: resp.data.albumId,
                Imageid: resp.data.id,
            })
            console.log(this.state.url)
            console.log(this.state.name)
            console.log(this.state.albumId)
            console.log(this.state.Imageid)
        })
    }

    getAlbum = (albumId) => {
        axios.get(`http://localhost:3001/albums/${this.state.albumId}`).then(resp => {
            this.setState({
                images: resp.data,
            })
            console.log(this.state.images)
        })
    }

    getCurrent = (id) => {
        this.setState({
            current: this.state.images.findIndex(item => item.id = id)
        })
        console.log(this.state.current)
    }

    goToPrevSlide = () => {
        this.getCurrent(this.props.match.params.id)
        if (this.state.current === 0)
            return;

        this.setState({
            prev: this.state.images[this.state.current - 1].id
        })
    }

    goToNextSlide = () => {
        this.getCurrent(this.props.match.params.id)
        if (this.state.current === this.state.images.length - 1) {
            return;
        }

        this.setState({
            next: this.state.images[this.state.current + 1].id,
        })
    }

    componentDidMount() {
        this.getImage(this.props.match.params.id)
        this.getAlbum(this.props.match.params.albumId)
        // this.getCurrent(this.props.match.params.Imageid)
        // this.goToPrevSlide(this.props.match.params.id)
        // this.goToNextSlide(this.props.match.params.id)

    }

    componentWillReceiveProps(newProps) {
        if (newProps.match.params.id !== this.props.match.params.id) {
            this.getImage(newProps.match.params.id)
            this.getAlbum(newProps.match.params.albumId)
            this.getCurrent(this.props.match.params.Imageid)

            // console.log(this.state.url)
            // console.log(this.state.name)
            // console.log(this.state.albumId)
            // console.log(this.state.images)
            // console.log(this.state.current)
            // console.log(this.state.prev)
            // console.log(this.state.next)
        }
    }

    render() {
        return (
            <div className="box">
                <div className="title">
                    <h1 className="imageTitle">{this.state.name}</h1>
                </div>
                <div className="picBox">
                    <div className="lArr">
                        <Link to={"/image/" + this.state.prev}><FaArrowLeft /></Link>
                    </div>
                    <div className="imageBox">
                        <img src={this.state.url} alt={this.state.name} id="picture" />
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