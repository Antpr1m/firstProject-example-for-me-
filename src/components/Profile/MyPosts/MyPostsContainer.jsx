import {addPostCreator, updatePostTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    debugger
    let state = props.store.getState().profilePage; //getting state from store for <MyPosts />

    let addPost = () => {
        props.store.dispatch(addPostCreator());
    }
    let onPostChange = (text) => {
        let action = updatePostTextCreator(text)
        props.store.dispatch(action);
    }

    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     profilePage={state}/>)
}

export default MyPostsContainer;

