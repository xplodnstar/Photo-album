import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios'
import { getAlbum } from '../actions/Calls'
import '../styles/AlbumImages.css';

class AlbumImages extends Component {
    state = {
        images: [],
        // name: ''
    }

    // getImage = (id) => {
    //     // const id = this.props.match.params.id
    //     axios.get(`http://localhost:3001/albums/${id}?_embed=images`).then(resp => {
    //         // axios.get(`http://localhost:3001/images`).then(resp => {
    //         console.log(resp)
    //         this.setState({
    //             images: resp.data.images,
    //             name: resp.data
    //         })
    //     })
    // }

    componentDidMount() {
        const id = this.props.match.params.id
        getAlbum(id)
        getAlbum(id).then(images => {
            this.setState({ images })
        })


        // this.getImage(this.props.match.params.id)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.match.params.id !== this.props.match.params.id) {
            const id = newProps.match.params.id
            getAlbum(id)

            // this.getImage(newProps.match.params.id)
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