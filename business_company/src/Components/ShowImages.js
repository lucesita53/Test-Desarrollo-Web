import React, { Component } from 'react';
import '../App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import facebook from '../Images/Facebook.png';
import apple from '../Images/Apple4.jpg';
import microsoft from '../Images/Microsoft.png';
import google from '../Images/Google.png';
import amazon from '../Images/Amazon.png';

class ShowImages extends Component {
    state = {value : 0}
    updateCurrentItem(newValue) {
        this.setState({value: newValue > -1 ? newValue: this.state.value});
    }

  render() {
    return (
        <div className='ImagesCarousel'>
            <Carousel onChange={(value)=>{this.setState({value: value})}} selectedItem={this.state.value} showThumbs={false} showArrows={false} showStatus={false} autoPlay={false} showIndicators={false}>
                <div>
                    <img src={facebook} style={{padding: 2}}/>
                </div>
                <div>
                    <img src={apple} style={{padding: 2}}/>
                </div>
                <div>
                    <img src={microsoft} style={{padding: 2}}/>
                </div>
                <div>
                    <img src={google} style={{padding: 2}}/>
                </div>
                <div>
                    <img src={amazon} style={{padding: 2}}/>
                </div>
            </Carousel>
        </div>
    );
  }
}

export default ShowImages;