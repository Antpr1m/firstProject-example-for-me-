import s from './Navbar.module.css';
import Sidebar from "./sidebar/Sidebar";
import Menu from "./Menu/Menu";

const Navbar = (props) => {
    return (
        <div className={s.container}>
            <Menu/>
            <Sidebar friends={props.state.friends}/>
        </div>
    )
}

export default Navbar;

