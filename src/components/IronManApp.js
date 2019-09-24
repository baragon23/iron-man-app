import React from 'react';
import fetchData from '../utils/api';
import Details from './details';
import Hero from './hero';
import ComicSlider from './slider';

export default class IronManApp extends React.Component {
	
	state = {
		ironManData: null,
		comicData: []
	};

	componentDidMount() {
		try {
			fetchData()
			.then(([ironManData, comicData ]) => {
				// console.log('iron', comicData);
				this.setState(() => ({
					ironManData,
					comicData
				}));
			});
		}
		catch(error) {
			console.log('Error: ', error);
		}
	}

	render() {
		
		const { ironManData, comicData } = this.state;
		if (!this.state.ironManData) return <div>Loading</div>;

		return (
			<div>
				<Hero 
					description={ironManData.description}
				/>
				<Details
					imageSrc={ironManData.thumbnail}
				/>
				<ComicSlider 
					comicData={comicData}
				/>
			</div>
		);
	}
}