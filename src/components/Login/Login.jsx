import { Field, reduxForm } from "redux-form"


const Login = (props) => {

	const onSubmit = (formData) => {
		console.log(formData);
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}



const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={'Login'} name={'login'} type="text" component={'input'} />
			</div>
			<div>
				<Field placeholder={'Password'} name={'password'} type="text" component={'input'} />
			</div>
			<div>
				<Field type="checkbox" name={'rememberMe'} component={'input'} />Remember me
			</div>
			<div>
				<button type="submit">Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

export default Login;