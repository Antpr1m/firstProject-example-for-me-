import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
	let state = props.profilePage;
	let postsElement = state.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);
	let newPostText = state.newPostText //отображение текста из state

	let onAddPost = () => {
		props.addPost();
	}
	let onPostChange = (e) => {
		let text = e.target.value; //Отправка набираемого текста в state
		props.updateNewPostText(text);
	}

	return (
		<div className={s.body}>
			<h3> My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} value={newPostText} />
				</div>
				<div>
					<button onClick={onAddPost}>Add post</button>
					<button>Remove</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	)
}

export default MyPosts;

