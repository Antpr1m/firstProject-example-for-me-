import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId)
/*        usersAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            })*/
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let authRedirectComponent = withAuthRedirect(ProfileContainer) //using a HOC

//чтобы не прокидывать каждый раз isAuth
/*let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})*/
/*authRedirectComponent = connect(mapStateToPropsForRedirect)(authRedirectComponent)*///connect для HOC, для доступа к state



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {getProfile})(withRouter(authRedirectComponent));

