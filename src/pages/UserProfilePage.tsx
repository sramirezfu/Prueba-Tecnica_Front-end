import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getUserProfile } from "../services";
import { UserProfileResponse } from "../interfaces";
import { Background, UserProfile } from "../components";

export const UserProfilePage = () => {

    const { login } = useParams();
    const [userProfile, setUserProfile] = useState<UserProfileResponse>();
    const [emptyUser, setEmptyUser] = useState('');


    useEffect(() => {
        if (login) {
            getUserProfile(login)
                .then(setUserProfile)
                .catch(error => {
                    console.log(error);
                    setEmptyUser('No user found, try again....');
                });
        }
    }, [login]);

    if (!login) {
        return <Navigate to="/" />
    }

    return (
        <div className="profile-user">
            {!userProfile ?
                <>
                    <h1 className="home-title">User profile</h1>
                    <h4 className="home-subtitle">Manage your team members and their information here</h4>
                    <Background emptyUser={emptyUser} />
                </>
                :
                <UserProfile userProfile={userProfile} />
            }
        </div>
    )
}
