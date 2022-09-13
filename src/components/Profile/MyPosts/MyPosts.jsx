import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/formsControl/formsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
	let state = props.profilePage;
	let postsElement = state.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

	let onAddPost = (value) => {
		props.addPost(value.newPostBody); //value - данные из формы
	}

	return (
		<div className={s.body}>
			<h3> My posts</h3>
			<div>
				<AddPostReduxForm onSubmit={onAddPost} />
			</div>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	)
}

const maxLength10 = maxLengthCreator(10)


const AddPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder='Add Post' component={Textarea} name='newPostBody' validate={[required, maxLength10]} />
			</div>
			<div>
				<button >Add post</button>
				<button>Remove</button>
			</div>
		</form>
	)
}

const AddPostReduxForm = reduxForm({ form: 'addPost' })(AddPostForm)

export default MyPosts;

