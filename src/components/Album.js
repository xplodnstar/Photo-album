import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getAlbumList, getAlbum } from '../actions/Calls'
import '../styles/Album.css';

class Album extends Component {
    state = {
        albums: [],
        aName: '',
        aDesc: ''
    }

    getAlbumList = () => {
        getAlbumList().then(albums => {
            this.setState({ albums })
        })
    }

    getAlbum = (id) => {
        getAlbum(id).then(images => {
            this.setState({
                aName: images.aName,
                aDesc: images.aDesc
            })
        })
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.getAlbumList()
        this.getAlbum(id)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.match.params.id !== this.props.match.params.id) {
            const id = newProps.match.params.id
            this.getAlbum(id)
        }
    }

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