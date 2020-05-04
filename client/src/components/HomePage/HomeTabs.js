import React from 'react';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
// import Login from './Login.js';
// import Register from './Register.js';

class HomeTabs extends React.Component {
    componentDidMount() {
			document.addEventListener('DOMContentLoaded', function () {
			var el = document.querySelectorAll('.tabs');
            var instance = M.Tabs.init(el, {swipeable:true,
                responsiveThreshold: true});
		});
       
    }
    render() {
        return(
        <div>
                    <ul id="tabs-swipe-demo" className="tabs">
                <li className="tab col s3"><a href="#test-swipe-1">Test 1</a></li>
                <li className="tab col s3"><a className="active" href="#test-swipe-2">Test 2</a></li>
                <li className="tab col s3"><a href="#test-swipe-3">Test 3</a></li>
            </ul>
            <div id="test-swipe-1" className="col s12 blue">Test 1</div>
            <div id="test-swipe-2" className="col s12 red">Test 2</div>
            <div id="test-swipe-3" className="col s12 green">Test 3</div>
        </div>
        )
    }
}

export default HomeTabs;