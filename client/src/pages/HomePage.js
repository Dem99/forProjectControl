import React from 'react'
import Navbar from './../components/HomePage/Navbar.js';
import HomeBanner from './../components/HomePage/HomeBanner.js';
import {Auth} from './../components/HomePage/Auth.js';
const HomePage = () => {
	return (
		<div>
			<Navbar />
			<HomeBanner />
		</div>
	)
}

export default HomePage;