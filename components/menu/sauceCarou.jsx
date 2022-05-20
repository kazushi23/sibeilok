import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';

class SauceCarou extends Component {
    constructor(props) {
        super(props);
    
        this.Carousel  = React.createRef();
        this.state = {touchStart: 0}
        this.state = {touchEnd: 0}
    
        this.handleTouchStart = this.handleTouchStart.bind(this)
        this.handleTouchMove = this.handleTouchMove.bind(this)
        this.handleTouchEnd = this.handleTouchEnd.bind(this)
      }
    
      handleTouchStart(e) {
        this.setState({touchStart: e.touches[0].clientX})
      }
    
      handleTouchMove(e) {
        this.setState({touchEnd: e.touches[0].clientX})
      }
    
      handleTouchEnd() {
        if (this.state.touchStart - this.state.touchEnd > 0) {
          this.Carousel.current.next()
        }
      
        if (this.state.touchStart - this.state.touchEnd < 0) {
          this.Carousel.current.prev()
        }
      }

    static get CONTAINER_STYLE() {
        return {
            position: "relative",
            height: "40vh",
            width: "100%",
            display: "flex",
            flex: 1,
            justifyContent: "top",
            alignItems: "top",
            overflow: "hidden",
        };
      }

    static get CARD_STYLE() {
        return {
            height: "250px",
            width: '65vw',
            maxWidth:"65vw",
            textAlign: 'center',
            cursor: "pointer",      
            userSelect: "none",
            touchAction: "none", 
        };
    }
    render() {
        return (
        <div>
          <div style={SauceCarou.CONTAINER_STYLE}>
            <ReactCardCarousel disable_box_shadow={true} ref={this.Carousel} autoplay={ true } autoplay_speed={ 5000 } spread="wide">
                <div onTouchEnd={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} style={ SauceCarou.CARD_STYLE }>
                    <img className="menu-img-less" src={"/saltedey-nbg.png"} alt="salted egg yolk"/>
                    <p className="xibeile-word">Salted Egg Yolk</p>
                    <p className="xibeile-word">Extra @ $1 only!</p>
                </div>
                <div onTouchEnd={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} style={ SauceCarou.CARD_STYLE }>
                    <img className="menu-img-less" src={"/mala-nbg.png"} alt="mala powder"/>
                    <p className="xibeile-word">Mala Powder</p>
                    <p className="xibeile-word">Extra @ $1 only!</p>
                </div>
                <div onTouchEnd={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} style={ SauceCarou.CARD_STYLE }>
                    <img className="menu-img-less" src={"/peanut-nbg.png"} alt="satay sauce"/>
                    <p className="xibeile-word">Sunat Sauce</p>
                </div>
                <div onTouchEnd={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} style={ SauceCarou.CARD_STYLE }>
                    <img className="menu-img-less" src={"/thaichilli-nbg.png"} alt="thai sweet chilli"/>
                    <p className="xibeile-word">Thai Sweet Chilli</p>
                </div>
                <div onTouchEnd={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} style={ SauceCarou.CARD_STYLE }>
                    <img className="menu-img-less" src={"/chicchilli-nbg.png"} alt="chicken rice chilli"/>
                    <p className="xibeile-word">Chicken Rice Chilli</p>
                </div>
            </ReactCardCarousel>
          </div>
          </div>
        );
      }
    }
export default SauceCarou