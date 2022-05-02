const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', likesCount: 11},
                {id: 2, message: "It's my first post", likesCount: 12},
                {id: 3, message: "I'm Lenochka-beauty kitty", likesCount: 88},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Seva'},
                {id: 2, name: 'Anton'},
                {id: 3, name: 'Lena'},
                {id: 4, name: 'Lisa'},
                {id: 5, name: 'Sergey'},
                {id: 6, name: 'Roma'},
                {id: 7, name: 'Masha'},
                {id: 8, name: 'Sasha'},
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: "What's your name?"},
                {id: 3, message: 'Mau-mau!!!'},
                {id: 4, message: 'Yo!Yo!Yo!'},
                {id: 5, message: 'Mau-mau-mau!!!'},
            ],
            newMessageText: 'it-kamasutra.com'
        },
        sidebar: {
            friends: [
                {name: 'Seva'},
                {name: 'Anton'},
                {name: 'Lena'},
            ]
        }
    },
    _callSubscriber() {
        console.log("Stay changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observer-pattern
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_TEXT,
        newText: text
    }
}
export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export default store;







