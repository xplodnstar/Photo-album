import React, { Component } from 'react';

import axios from 'axios'
import '../styles//Image.css';


class Carousel extends Component {
    state = {
        images: [],
        url: '',
        current: '',
        value: '',
        prev: '',
        next: ''
    }

    getImage = (id) => {
        axios.get(`http://localhost:3001/images/${id}`).then(resp => {
            this.setState({
                images: resp.data,
                url: resp.data.url,
            })
        })
    }

    goToPrevSlide = () => {
        if (this.state.current === 0)
            return;

        this.setState(prevState => ({
            current: prevState.current - 1,
            value: prevState.value + this.slideWidth()
        }))
    }

    goToNextSlide = () => {
        if (this.state.current === this.state.images.length - 1) {
            return this.setState({
                current: 0,
                value: 0
            })
        }

        this.setState(prevState => ({
            current: prevState.current + 1,
            value: prevState.value + -(this.slideWidth())
        }));
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }








    // componentDidMount() {
    //     this.getImage(this.props.match.params.id)
    // }

    // componentWillReceiveProps(newProps) {
    //     if (newProps.match.params.id !== this.props.match.params.id) {
    //         this.getImage(newProps.match.params.id)
    //     }
    // }

    // render() {
    //     return (
    //         <div className="imageBox">
    //             <div className="title">
    //                 <h1 className="imageTitle">{this.state.name}</h1>
    //             </div>
    //             <div className="picBox">
    //                 <div className="lArr"><Link to={"/image/" + this.state.prev}><FaArrowLeft /></Link></div>
    //                 <div className="imageBox">
    //                     <img src={this.state.url} alt={this.state.name} />
    //                 </div>
    //                 <div className="rArr"><Link to={"/image/" + this.state.next}><FaArrowRight /></Link></div>
    //             </div >
    //         </div>
    //     )
    // }
}

export default Carousel