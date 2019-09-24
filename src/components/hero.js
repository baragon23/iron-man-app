import React from 'react';
import ironman from '../../public/images/iron-man-cartoon.png';
import ironmanMobile from '../../public/images/iron-man-cartoon-mobile.png';
import logo from '../../public/images/logo.png';
import logoMobile from '../../public/images/logo-mobile.png';

const Hero = ({ description }) => {
	return (
		<div id="hero-container">
			<div className="header">
				<div className="logo">
					<img 
						alt="Iron Man Logo"
						src={logo}
						srcSet={`${logoMobile} 230w, ${logo} 418w`}
						sizes="(max-width: 1479px) 230px,
            					418px"
					/>
				</div>
				<div>
					<span className="signin">
						<a href="/">Sign In</a>
					</span>
					<span className="signup">
						<a href="/">Sign Up</a>
					</span>
				</div>
			</div>
			<div className="intro">
				<div className="text">
					<p>{description}</p>
					<div className="get-started"><a href="/">Get Started</a></div>
				</div>
				<div className="ironman-img">
					<img
						alt="Iron Man Image"
						src={ironman}
						srcSet={`${ironmanMobile} 230w, ${ironman} 410w`}
						sizes="(max-width: 1479px) 230px,
								410px"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;