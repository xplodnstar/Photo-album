import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios'
import { getAlbumList, getAlbum } from '../actions/Calls'
import '../styles/Album.css';

class Album extends Component {
    state = {
        albums: [],
        aName: '',
        aDesc: ''
    }

    // getAlbum = (id) => {
    //     axios.get('http://localhost:3001/albums').then(resp => {
    //         console.log(resp.data)
    //         this.setState({
    //             albums: resp.data,
    //         })
    //     })
    // }

    // getImage = (id) => {
    //     // const id = this.props.match.params.id
    //     axios.get(`http://localhost:3001/albums/${id}?_embed=images`).then(resp => {
    //         // axios.get(`http://localhost:3001/images`).then(resp => {
    //         console.log(resp)
    //         this.setState({
    //             images: resp.data.images,
    //             name: resp.data.name,
    //             desc: resp.data.description
    //         })
    //     })
    // }

    componentDidMount() {
        getAlbumList().then(albums => {
            this.setState({ albums })
        })
        getAlbum().then(item => {
            this.setState({
                aName: item.aName,
                aDesc: item.aDesc
            })
        })

        // this.getAlbum(this.props.match.params.id)
        // this.getImage(this.props.match.params.id)
    }

    // componentWillReceiveProps(newProps) {
    //     if (newProps.match.params.id !== this.props.match.params.id) {
    //         // this.getAlbum(newProps.match.params.id)
    //         // this.getImage(newProps.match.params.id)
    //     }
    // }

    render() {
        return (
            <Fragment>
                <div id="albumName">
                    <div className="title">
                        <h1 className="albumTitle">{this.state.aName}</h1>
                        <p className="albumDesc">{this.state.aDesc}</p>
                    </div>
                    <div className="sideBar">
                        <ul className="listAlbums">
                            {
                                this.state.albums.map(album => (
                                    <li key={'album-' + album.aId} className="albumNamesList">
                                        <Link to={"/album/" + album.aId} className='link'>{album.aName}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </Fragment >
        )
    }
}


export default Album