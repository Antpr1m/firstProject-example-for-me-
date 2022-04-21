import s from './Sidebar.module.css';
import Friend from "./Friends/Friend";


const Sidebar = (props) => {
    let friendElement = props.friends.map(f => <Friend name={f.name}/>)

    return (
        <div className={s.container}>
            <h3 className={s.title}>Friends</h3>
            <div className={s.friends}>
                {friendElement}
            </div>
        </div>

    )
}

export default Sidebar;

