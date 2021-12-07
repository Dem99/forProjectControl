import React, { useEffect } from 'react';
import { Auth } from './Auth.js';
import { NavLink } from 'react-router-dom';

class HomeModal extends React.Component {
	componentDidMount() {
		const M = window.M;
		document.addEventListener('DOMContentLoaded', function () {
			var elems = document.querySelectorAll('.modal');
			var instances = M.Modal.init(elems, {});
		});
	}

	render() {
		return (
			<div className="home-modal">
				<a className="btn waves-effect waves-teal modal-trigger modal-button" href="#modal1"><i className="material-icons">add</i>Зарегестрироваться</a>
				<div id="modal1" className="modal">
					<div className="modal-content">
						<Auth />
					</div>
				</div>
			</div>
		)
	}
}

export default HomeModal;