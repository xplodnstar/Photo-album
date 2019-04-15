import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getAlbumList } from '../actions/Calls'
import '../styles/AlbumList.css';

class AlbumList extends Component {
    state = {
        albums: []
    }

    componentDidMount() {
        getAlbumList().then(albums => {
            this.setState({ albums })
        })
    }

    render() {
        return (
            <Fragment>
                <div className="albumList">
                    <div className="title">
                        <span className="littleWords">Some of </span><h1 className="bigWords">My Fandoms</h1>
                    </div>
                    <ul className="displayAlbums">
                        {
                            this.state.albums.map(album => (
                                <li key={album.aId} className="albumNames">
                                    <Link to={"/album/" + album.aId}><img src={album.aArt} alt={album.aName} className="albumArt" /></Link><br></br>
                                    <p className="link"><Link to={"/album/" + album.aId} className="link">{album.aName}</Link></p>
                                    <p className="description">{album.aDesc}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }
}


export default AlbumList