import style from './Users.module.css'
import * as axios from "axios";
import userPhoto from "../../img/user.png";
import React from "react";

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

render()
{
    return (
        <div className={style.usersContainer}>
            {
                this.props.users.map(u => <div key={u.id} className={style.usersBody}>
                    <div>
                        <div className={style.userImage}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            {/* <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>*/}
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}
}

export default Users;