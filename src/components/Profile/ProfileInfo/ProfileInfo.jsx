import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div>
			{/* <div>
                <img
                    src='https://static8.depositphotos.com/1010338/959/i/600/depositphotos_9598735-stock-photo-two-beach-chairs-on-idyllic.jpg'/>
            </div>*/}
			<div className={s.description}>
				<img src={props.profile.photos.large} />
				<ProfileStatus status={props.status} updateStatus={props.updateStatus} />
			</div>
		</div>
	)
}

export default ProfileInfo;

/*
<div className={s.descriptionAbout}>
	 <div className={s.descriptionTitle}>About me</div>
	 <div className={s.descriptionName}>My name: {props.profile.fullName ? props.profile.fullName : ''}</div>
	 <div className={s.descriptionStatus}>{props.profile.aboutMe ? props.profile.aboutMe : ''}</div>
</div>*/