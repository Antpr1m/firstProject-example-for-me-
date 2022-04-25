import React from 'react';
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import './index.css';
import {addPost, updateNewPostText} from "./redux/state";


let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(state);
subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
