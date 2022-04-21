import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src='https://static8.depositphotos.com/1010338/959/i/600/depositphotos_9598735-stock-photo-two-beach-chairs-on-idyllic.jpg'/>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;

