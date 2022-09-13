import { sendMessageCreator } from "../../redux/dialogs-reducer.ts";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


let mapStateToProps = (state) => {
	return { dialogsPage: state.dialogsPage }
}
let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (messageBody) => dispatch(sendMessageCreator(messageBody))
	}
}

/*let authNavigateComponent = withAuthRedirect(Dialogs);*///using a HOC

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs)


