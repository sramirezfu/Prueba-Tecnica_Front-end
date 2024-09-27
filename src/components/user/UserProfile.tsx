import { FC } from "react";
import moment from "moment";
import { UserProfileResponse } from "../../interfaces";

interface Props {
    userProfile: UserProfileResponse
}

export const UserProfile: FC<Props> = ({ userProfile }) => {
    return (
        <div className="profile-content">
            <div className="profile-content_info">
                <span className="profile-role">{userProfile.type}</span>
                <h1 className="profile-name">{userProfile.name}</h1>
                <h3 className="profile-location">
                    {userProfile.location}
                    {userProfile.company && <span> - {userProfile.company}</span>}
                </h3>
                <div className="profile-content_social">
                    <div className="profile-social_followers">
                        <span className="profile-social_follower">Followers</span>
                        <span className="profile-social_total">{userProfile.followers}</span>
                    </div>
                    <div className="profile-social_followers">
                        <span className="profile-social_follower">Following</span>
                        <span className="profile-social_total">{userProfile.following}</span>
                    </div>
                </div>
                <h5 className="profile-bio">About me</h5>
                <p>sit amet, consectetur adipisicing elit. Veniam nostrum consequuntur sunt, aliquam excepturi aspernatur ratione illo adipisci vel laborum minus perferendis, vero quis iusto sed voluptates temporibus! Impedit, libero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero maxime facere blanditiis nesciunt, maiores accusamus, ducimus dolorum excepturi aliquid, error expedita incidunt fugiat pariatur porro voluptate quisquam molestiae eos vitae.</p>
                <h3 className="profile-location profile-create">
                    Create account
                    {userProfile.created_at && <span> - {moment(userProfile.created_at).format('L')}</span>}
                </h3>
                <div className="profile-content_public">
                    <div className="profile-social_followers">
                        <span className="profile-social_follower">Public repos</span>
                        <span className="profile-social_total">{userProfile.public_repos}</span>
                    </div>
                    <div className="profile-social_followers">
                        <span className="profile-social_follower">Public gists</span>
                        <span className="profile-social_total">{userProfile.public_gists}</span>
                    </div>
                </div>
            </div>
            <img src={userProfile.avatar_url} alt={userProfile.login} className="profile-avatar" />
        </div>
    )
}
