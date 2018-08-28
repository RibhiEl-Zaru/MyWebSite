import React, {Component} from 'react';
// Change the slide transition type.
var transition = 'scale';
// try translate, scale, blur, rotate

var appearTransition = true;
// Change it to true to add an appear transition that fades the image in from grayscale to full color.

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

var slides = ['https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?fit=crop&fm=jpg&h=825&q=80&w=1325', 'https://images.unsplash.com/photo-1445251836269-d158eaa028a6?fit=crop&fm=jpg&h=825&q=80&w=1325', 'https://images.unsplash.com/photo-1443926818681-717d074a57af?fit=crop&fm=jpg&h=825&q=80&w=1325'];

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  prevSlide() {
    var prevSlide = this.state.counter - 1 < 0
      ? this.props.slides.length - 1
      : this.state.counter - 1;
    this.setState({counter: prevSlide})
  }

  nextSlide() {
    var nextSlide = this.state.counter + 1 < this.props.slides.length
      ? this.state.counter + 1
      : 0;
    this.setState({counter: nextSlide})
  }

  render() {
    console.log(this.props)
    var style = {
      backgroundImage: this.props.slides[this.state.counter]
    }
    var photo = this.props.slides[this.state.counter];
    return (<div className="carousel">
      <div className="carousel__prev" onClick={this.prevSlide}>◀︎</div>
      <div className="carousel__next" onClick={this.nextSlide}>▶︎</div>
      <CSSTransitionGroup transitionName={transition} transitionEnterTimeout={500} transitionLeaveTimeout={500} component="div" className="carousel__slide" transitionAppear={appearTransition} transitionAppearTimeout={1000}>
        <div>
          <img src={photo} style={style} key={this.state.counter}></img>
        </div>
      </CSSTransitionGroup>
    </div>)
  }
}

export default Carousel
