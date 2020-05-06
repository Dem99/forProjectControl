import React from 'react';
import { Auth } from './Auth.js';;

class HomeModal extends React.Component {
	componentDidMount() {
		const M = window.M;
		document.addEventListener('DOMContentLoaded', function () {
			var elems = document.querySelectorAll('.modal');
			var instances = M.Modal.init(elems, {onOpenStart: () => {
				console.log("Open Start");
			  }, onCloseEnd: () => {
				console.log("Close End");
			  },}
			  );
		});
	}

	render() {
		return (
			<div className="home-modal">
				<a className="btn waves-effect waves-teal modal-trigger modal-button" href="#modal1"><i className="material-icons">add</i>Зарегестрироваться</a>
				<div id="modal1" className="modal">
				<div className="auth-title">
				<i className="material-icons">group_add</i><h1>Зарегистрировать Аккаунт</h1>
				</div>
					<div className="modal-content">
						<Auth />
					</div>
				</div>
			</div>
		)
	}
}

export default HomeModal;
