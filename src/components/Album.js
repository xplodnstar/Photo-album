import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../styles/Album.css';

class Album extends Component {
    state = {
        albums: [],
        images: [],
        name: ''
    }

    getAlbum = (id) => {
        axios.get('http://localhost:3001/albums').then(resp => {
            console.log(resp.data)
            this.setState({
                albums: resp.data,
            })
        })
    }

    getImage = (id) => {
        // const id = this.props.match.params.id
        axios.get(`http://localhost:3001/albums/${id}?_embed=images`).then(resp => {
            // axios.get(`http://localhost:3001/images`).then(resp => {
            console.log(resp)
            this.setState({
                images: resp.data.images,
                name: resp.data.name
            })
        })
    }

    componentDidMount() {
        this.getAlbum(this.props.match.params.id)
        this.getImage(this.props.match.params.id)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.match.params.id !== this.props.match.params.id) {
            this.getAlbum(newProps.match.params.id)
            this.getImage(newProps.match.params.id)
        }
    }

    render() {
        return (
            <Fragment>
                <div id="albumName">
                    <div className="title">
                        <h1 className="albumTitle">{this.state.name}</h1>
                    </div>
                    <div className="sideBar">
                        <ul className="listAlbums">
                            {
                                this.state.albums.map(album => (
                                    <li key={album.id} className="albumNamesList">
                                        <Link to={"/album/" + album.id} className='link'>{album.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default Album