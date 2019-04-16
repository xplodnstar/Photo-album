import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getAlbum } from '../actions/Calls'
import '../styles/AlbumImages.css';

class AlbumImages extends Component {
    state = {
        images: []
    }

    getAlbum = (id) => {
        getAlbum(id).then(images => {
            this.setState(images)
        })
    }


    componentDidMount() {
        const id = this.props.match.params.id
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
                <div className="imageList">
                    <ul className="displayImages">
                        {
                            this.state.images.map(image => (
                                <li key={`${image.albumId}-${image.iId}`} className="imageNames" >
                                    <Link to={"/image/" + image.iId}><img src={image.iArt} alt={image.iName} className="imageArt" /></Link> <br></br>
                                    <Link to={"/image/" + image.iId} className='link'>{image.iName}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }
}


export default AlbumImages