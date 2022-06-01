import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';

class MenuCarou extends Component {
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
            touchAction: "auto", 
        };
    }
    render() {
        return (
        <div>
          <div style={MenuCarou.CONTAINER_STYLE}>
            <ReactCardCarousel ref={this.Carousel} autoplay={ true } autoplay_speed={ 5000 } disable_box_shadow={true} spread="wide">
                <div onTouchEnd={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} style={ MenuCarou.CARD_STYLE }>
                    <img className="menu-img" src={"/bakkwa-nbg.png"} alt="bakkwa"/>
                    <p className="xibeile-word">Bak Kwa</p>
                    <p className="xibeile-word">$1.80</p>
                </div>
                <div onTouchEnd={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} style={ MenuCarou.CARD_STYLE }>
                    <img className="menu-img" src={"/baconshroom-nbg.png"} alt="bacon mushroom"/>
                    <p className="xibeile-word">Bacon Enoki</p>
                    <p className="xibeile-word">$1.80</p>
                </div>
                <div onTouchEnd={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} style={ MenuCarou.CARD_STYLE }>
                    <img className="menu-img" src={"/beancurdskin-nbg.png"} alt="beancurd skin"/>
                    <p className="xibeile-word">Beancurd Skin</p>
                    <p className="xibeile-word">$1.20</p>
                </div>
                <div onTouchEnd={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} style={ MenuCarou.CARD_STYLE }>
                    <img className="menu-img" src={"/bigshroom-nbg.png"} alt="oyster mushroom"/>
                    <p className="xibeile-word">Oyster Mushroom</p>
                    <p className="xibeile-word">$1.20</p>
                </div>
                <div onTouchEnd={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} style={ MenuCarou.CARD_STYLE }>
                    <img className="menu-img" src={"/broccoli-nbg.png"} alt="broccoli"/>
                    <p className="xibeile-word">Broccoli</p>
                    <p className="xibeile-word">$1.20</p>
                </div>
                <div onTouchEnd={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} style={ MenuCarou.CARD_STYLE }>
                    <img className="menu-img" src={"/cheeseball-nbg2.png"} alt="cheeseball"/>
                    <p className="xibeile-word">Cheeseball</p>
                    <p className="xibeile-word">$1.80</p>
                </div>
                <div onTouchEnd={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} style={ MenuCarou.CARD_STYLE }>
                    <img className="menu-img" src={"/duckbreast-nbg.png"} alt="smoke duck"/>
                    <p className="xibeile-word">Smoke Duck</p>
                    <p className="xibeile-word">$1.80</p>
                </div>
                <div onTouchEnd={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} style={ MenuCarou.CARD_STYLE }>
                    <img className="menu-img" src={"/meatball-nbg.png"} alt="meatball"/>
                    <p className="xibeile-word">Meat Ball</p>
                    <p className="xibeile-word">$1.80</p>
                </div>
                <div onTouchEnd={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} style={ MenuCarou.CARD_STYLE }>
                    <img className="menu-img" src={"/mushroom-nbg.png"} alt="mushroom"/>
                    <p className="xibeile-word">Mushroom</p>
                    <p className="xibeile-word">$1.20</p>
                </div>
                <div onTouchEnd={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} style={ MenuCarou.CARD_STYLE }>
                    <img className="menu-img" src={"/nugget-nbg.png"} alt="nugget"/>
                    <p className="xibeile-word">Nugget</p>
                    <p className="xibeile-word">$1.80</p>
                </div>
                <div onTouchEnd={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} style={ MenuCarou.CARD_STYLE }>
                    <img className="menu-img" src={"/quail-nbg.png"} alt="quail egg"/>
                    <p className="xibeile-word">Quail Egg</p>
                    <p className="xibeile-word">$1.80</p>
                </div>
                <div onTouchEnd={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} style={ MenuCarou.CARD_STYLE }>
                    <img className="menu-img" src={"/sausage-nbg.png"} alt="sausage"/>
                    <p className="xibeile-word">Sausage</p>
                    <p className="xibeile-word">$1.80</p>
                </div>
                <div onTouchEnd={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} style={ MenuCarou.CARD_STYLE }>
                    <img className="menu-img" src={"/spam-nbg.png"} alt="luncheon meat"/>
                    <p className="xibeile-word">Lucheon Meat</p>
                    <p className="xibeile-word">$1.80</p>
                </div>
                <div onTouchEnd={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} style={ MenuCarou.CARD_STYLE }>
                    <img className="menu-img" src={"/swdchick-nbg.png"} alt="seaweed chicken"/>
                    <p className="xibeile-word">Seaweed Chicken</p>
                    <p className="xibeile-word">$1.80</p>
                </div>
            </ReactCardCarousel>
          </div>
          </div>
        );
      }
    }
export default MenuCarou