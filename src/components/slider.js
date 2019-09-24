import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ComicSlider = ({ comicData }) => {
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 7,
		slidesToScroll: 6,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				}
			},
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 920,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 657,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	};
	
	return (
		<div>
			<Slider {...settings}>
				{comicData && comicData.map((comic) => {
					return (
						<div key={comic.id}>
							<img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
						</div>
					);
				})}
			</Slider>
		</div>
	);
};

export default ComicSlider;