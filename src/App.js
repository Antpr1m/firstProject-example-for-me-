import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer.tsx";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from "./redux/app-reducer.ts"
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';


class App extends React.Component {

	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialApp) {
			return <Preloader />
		}
		return (
			<div className='app-wrapper' >
				<HeaderContainer />
				<Navbar />
				<div className='app-wrapper-content'>
					<Routes>
						<Route path="/profile/:userId" element={<ProfileContainer />} />
						<Route path="/profile" element={<ProfileContainer />} />
						<Route path="/dialogs/*"
							element={<DialogsContainer />} />
						<Route path="/users" element={<UsersContainer />} />
						<Route path="/news" element={<News />} />
						<Route path="/music" element={<Music />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="/login" element={<Login />} />
					</Routes>
					{/* <ProfileInfo /> */}
					{/* <Dialogs /> */}
				</div>
			</div>
		);
	}
};

const mapStateToProps = (state) => ({
	initialApp: state.app.initialApp
})

export default compose(
	connect(mapStateToProps, { initializeApp }))(App);
