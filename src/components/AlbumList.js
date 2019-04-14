import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../styles/AlbumList.css';

class AlbumList extends Component {
    state = {
        albums: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/albums').then(resp => {
            this.setState({
                albums: resp.data
            })
        })
    }

    // const AlbumList = props => (
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
                                <li key={album.id} className="albumNames">
                                    <Link to={"/album/" + album.id}><img src={album.img} alt={album.name} className="albumArt" /></Link><br></br>
                                    <p className="link"><Link to={"/album/" + album.id} className="link">{album.name}</Link></p>
                                    <p className="description">{album.description}</p>
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