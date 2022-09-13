import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form"
import { login } from "../../redux/auth-reducer.ts";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/formsControl/formsControls";
import { Navigate } from "react-router";
import style from "../common/formsControl/formsControls.module.css"


const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={'Email'} name={'email'}
					type="text" component={Input}
					validate={required} />
			</div>
			<div>
				<Field placeholder={'Password'} name={'password'}
					type="password" component={Input}
					validate={required} />
			</div>
			<div>
				<Field type="checkbox" name={'rememberMe'}
					component={Input} />Remember me
			</div>
			{props.error && <div className={style.formSummaryError}>
				{props.error}
			</div>
			}
			<div>
				<button type="submit">Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


const Login = (props) => {

	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	}

	if (props.isAuth) {
		return <Navigate to={'/profile'} />
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);