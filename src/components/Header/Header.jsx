import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
			<div>
				<img src='https://автолого.рф/wp-content/uploads/lamborghini-logo.png'/>
			</div>
            <div className={s.headerLoginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;

