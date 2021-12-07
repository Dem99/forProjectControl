import React from 'react';
import banner from './../../assets/images/home-banner.png';
import './HomePage.css';

const HomeBanner = () => {
	return (
		<div className="home-banner banner">
			<div className="banner-wrapper center-align container">
				<div className="banner-title title">
					<h1 className="title-text">
						Task System способствует более тесному сотрудничеству и увеличению эффективности работы.
						</h1>
				</div>
				<div className="banner-item">
					<div className="banner-image">
						<img src={banner} alt="banner" className="responsive-img" />
					</div>
				</div>
				<div className="banner-item">
					<p className="banner-discr">
						Благодаря доскам, спискам и карточкам Task System пользователи могут упорядочивать проекты и расставлять приоритеты — работать станет гораздо удобнее и приятнее!
					</p>
				</div>
			</div>
		</div>

	)
}

export default HomeBanner;