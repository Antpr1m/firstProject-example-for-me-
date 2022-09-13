import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile, getStatus, updateStatus } from "../../redux/profile-reducer.ts";
import { useLocation, useNavigate, useParams, } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return (
			<Component
				{...props}
				router={{ location, navigate, params }}
			/>
		);
	}

	return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

	//Запросы на сервер делать в componentDidMount
	componentDidMount() {
		let userId = this.props.router.params.userId;
		if (!userId) {
			// userId = this.props.userId;
			userId = 2
		}
		this.props.getProfile(userId)
		this.props.getStatus(userId) //Запрос статуса для его редактирования на страничке профиля
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile}
				status={this.props.status}
				updateStatus={this.props.updateStatus} />
		)
	}
}


let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	userId: state.auth.userId,
	isAuth: state.auth.isAuth
})

export default compose(
	connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
	withRouter,
	withAuthRedirect
)(ProfileContainer)


