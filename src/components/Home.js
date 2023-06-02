import React, { Component } from 'react';
import video from './shoes 2.mp4';
import './Video.css';

export default class Home extends Component {

  render() {

    return (
      <React.Fragment>
        <video loop autoPlay>
          <source src={video} type="video/mp4" />
        </video>
        <div className="mt-15">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
            <div className="text-center">
              <img src="https://5.imimg.com/data5/SELLER/Default/2022/7/JJ/ND/JE/96403645/6f3272e7-341f-4938-a418-caca8aa58be4-500x500.jpg" alt="" />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">Men's shoes collection</h3>
            <div className="mb-1">
              <p>
                Constructed from luxury nylons, leathers, and custom hardware,
                featuring sport details such as hidden breathing vents, waterproof
                + antimicrobial linings, and more.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
            <div className="text-center">
              <img src="https://pyxis.nymag.com/v1/imgs/a79/296/3731bcf57b5c9cdb8593c277c72e21ea7d-16-nike-shoes-lede.rsquare.w700.jpg" alt="" />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">Women's shoes collection</h3>
            <div className="mb-1">
              <p>
                Constructed from luxury nylons, leathers, and custom hardware,
                featuring sport details such as hidden breathing vents, waterproof
                + antimicrobial linings, and more.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
            <div className="text-center">
              <img src="https://images.vans.com/is/image/VansEU/VN0A34A1LXN-HERO?$PDP-FULL-IMAGE$" alt="" />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">Kids' shoes collection</h3>
            <div className="mb-1">
              <p>
                Constructed from luxury nylons, leathers, and custom hardware,
                featuring sport details such as hidden breathing vents, waterproof
                + antimicrobial linings, and more.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
