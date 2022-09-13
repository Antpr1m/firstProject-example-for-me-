import style from "./Users.module.css";
import userPhoto from "../../img/user.png";
import React from "react";
import { NavLink } from "react-router-dom";
import { followAPI } from "../../api/api";
import { toggleFollowingProgress } from "../../redux/users-reducer.ts";


const Users = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
		if (i == 20) break;
	}
	return (
		<div className={style.usersContainer}>
			<div className={style.usersPagination}>
				{pages.map(p =>
					<span className={props.currentPage === p && style.selectedPage}
						onClick={(e) => {
							props.onPageChanged(p)
						}}>{p}</span>
				)}
			</div>
			{
				props.users.map(u => <div key={u.id} className={style.usersBody}>
					<div>
						<div className={style.userImage}>
							<NavLink to={'/profile/' + u.id}>
								<img src={u.photos.small != null ? u.photos.small : userPhoto} />
							</NavLink>
						</div>
						<div>
							{u.followed
								? <button disabled={props.followingInProgress.some(id => id === u.id)}
									onClick={() => { props.unfollow(u.id) }}>
									Unfollow</button>
								: <button disabled={props.followingInProgress.some(id => id === u.id)}
									onClick={() => { props.follow(u.id) }}>
									Follow</button>}
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

export default Users;