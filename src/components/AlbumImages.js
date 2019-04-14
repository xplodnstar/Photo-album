import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../styles/AlbumImages.css';

class AlbumImages extends Component {
    state = {
        images: [],
        name: ''
    }

    getImage = (id) => {
        // const id = this.props.match.params.id
        axios.get(`http://localhost:3001/albums/${id}?_embed=images`).then(resp => {
            // axios.get(`http://localhost:3001/images`).then(resp => {
            console.log(resp)
            this.setState({
                images: resp.data.images,
                name: resp.data
            })
        })
    }

    componentDidMount() {
        this.getImage(this.props.match.params.id)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.match.params.id !== this.props.match.params.id) {
            this.getImage(newProps.match.params.id)
        }
    }

    render() {
        return (
            <Fragment>
                <div className="imageList">
                    <ul className="displayImages">
                        {
                            this.state.images.map(image => (
                                <li key={`${image.albumId}-${image.id}`} className="imageNames" >
                                    <Link to={"/image/" + image.id}><img src={image.url} alt={image.name} className="imageArt" /></Link> <br></br>
                                    <Link to={"/image/" + image.id} className='link'>{image.name}</Link>
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