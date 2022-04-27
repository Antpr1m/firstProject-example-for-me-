/*let store = {
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
        },
        sidebar: {
            friends: [
                {name: 'Seva'},
                {name: 'Anton'},
                {name: 'Lena'},
            ]
        }
    },
    getState() {
      return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    addPost() {
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        //this.updateNewPostText('');
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;
window.store = store;*/

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
        },
        sidebar: {
            friends: [
                {name: 'Seva'},
                {name: 'Anton'},
                {name: 'Lena'},
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("Stay changed")
    },
    addPost() {
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
},
    subscribe(observer) {
        this._callSubscriber = observer; //observer-pattern
    },
}

export default store;







