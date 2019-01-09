import React, { Component } from 'react';
import '../App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import facebook from '../Images/Facebook.png';
import apple from '../Images/Apple.jpg';
import microsoft from '../Images/Microsoft.png';
import google from '../Images/Google.png';
import amazon from '../Images/Amazon.png';

class ShowImages extends Component {
  render() {
    return (
        <Carousel showThumbs={false} showArrows={true} showStatus={true} autoPlay={true} >
            <div>
                <img src={facebook}/>
            </div>
            <div>
                <img src={apple}/>
            </div>
            <div>
                <img src={microsoft}/>
            </div>
            <div>
                <img src={google}/>
            </div>
            <div>
                <img src={amazon}/>
            </div>
        </Carousel>
    );
  }
}

export default ShowImages;