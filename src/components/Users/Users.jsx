import style from './Users.module.css'
import * as axios from "axios";
import userPhoto from "../../img/user.png";
import React from "react";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);

            })
    }

    onPageChenged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <=pagesCount ; i++) {
            pages.push(i);
            if (i == 20)break;
        }

        return (
            <div className={style.usersContainer}>
                <div className={style.usersPagination}>
                    {pages.map( p =>
                        <span className={this.props.currentPage === p && style.selectedPage}
                        onClick={(e)=>{this.onPageChenged(p)}}>{p}</span>
                    )}
                </div>
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