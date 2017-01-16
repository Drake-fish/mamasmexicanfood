import React from 'react';
import TGroup from 'react-addons-css-transition-group';

export default React.createClass({
	getInitialState() {
		return {
			imgIndex: 0,
			interval: null,
      paused:false
		};
	},
	componentDidMount() {
		this.startCarousel();
	},
  componentWillUnmount(){
    this.stopCarousel();
  },
	render() {
    let paused=(
                <div className="paused">
                  <i className="fa fa-play" aria-hidden="true"></i>
                </div>
    );
    if(!this.state.paused){
      paused=(
              <div className="playing">
                <i className="fa fa-pause" aria-hidden="true"></i>
              </div>
      );

    }
		return (
			<div
				onClick={this.toggleCarousel}
				className="carousel">
				<TGroup
					transitionName="carousel"
					transitionEnterTimeout={2000}
					transitionLeaveTimeout={2000}>
					<img
						key={this.state.imgIndex}
						className="carousel-img"
						src={this.props.images[this.state.imgIndex].src}/>
				</TGroup>
        {paused}
			</div>
			);
	},
	toggleCarousel() {
		if (this.state.interval === null) {
			this.startCarousel();
		} else {
			this.stopCarousel();
		}
	},
	stopCarousel() {
		clearInterval(this.state.interval);
		this.setState({interval: null, paused:true});
	},
	startCarousel() {
    this.setState({paused:false});
		this.setState({interval: setInterval(() => {
			if (this.state.imgIndex >= this.props.images.length - 1) {
				this.setState({imgIndex: 0});
			} else {
				this.setState({imgIndex: this.state.imgIndex + 1});
			}
		}, 5000)});
	}
});
