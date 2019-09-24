import React from 'react';
import iconBusinessman from '../../public/images/icon-businessman.svg';
import iconEngineer from '../../public/images/icon-engineer.svg';
import iconGenius from '../../public/images/icon-genius.svg';
import iconTactician from '../../public/images/icon-tactician.svg';

const Details = ({ imageSrc }) => {
	return (
		<div className="char-detail-container">
			<div className="header">
				Contrary to popular belief, he knows exactly what he's doing.
			</div>
			<div className="content">
				<div className="ironman">
					{imageSrc && <img src={`${imageSrc.path}.${imageSrc.extension}`} />}
				</div>
				<div className="features">
					<div className="feature">
						<img src={iconGenius} />
						<h3>Super-Genius Intelligence</h3>
						<p>Quite apart from the powers granted him by the suit, Tony Stark is
						far more than a mechanical engineering prodigy who graduated from
						the Massachusetts Institute of Technology with honors at the age
						of 17.</p>
					</div>
					<div className="feature">
						<img src={iconEngineer} />
						<h3>Master Engineer</h3>
						<p>He is an excellent engineer and mechanic capable of fixing almost
						any, if not all machinery.</p>
					</div>
					<div className="feature">
						<img src={iconBusinessman} />
						<h3>Master Businessman</h3>
						<p>Stark is extremely well-respected in the business world, able to
						command people's attentions when he speaks on economic matters. He
						has built up several multi-million dollar companies from virtually
						nothing.</p>
					</div>
					<div className="feature">
						<img src={iconTactician} />
						<h3>Expert Tactician</h3>
						<p>He is a brilliant tactician capable of quickly formulating battle
						strategies and new plans if the situation changes, like being able
						to elaborate complex plans in order to defeat different enemies.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;