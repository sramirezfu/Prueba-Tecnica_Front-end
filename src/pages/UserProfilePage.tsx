import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getUserProfile } from "../services";
import { UserProfileResponse } from "../interfaces";
import { Background, NotificationManager, UserProfile } from "../components";

export const UserProfilePage = () => {

    const { login } = useParams();
    const [userProfile, setUserProfile] = useState<UserProfileResponse>();
    const [emptyUser, setEmptyUser] = useState('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (login) {
            getUserProfile(login)
                .then(setUserProfile)
                .catch(error => {
                    console.log(error);
                    setEmptyUser('No user found, try again....');
                    setError('Error getting user info');
                });
        }
    }, [login]);

    const handleClose = () => {
        setError(null);
    };

    if (!login) {
        return <Navigate to="/" />
    }

    return (
        <>
            {error && <NotificationManager message={error} onClose={handleClose} />}
            <div className="profile-user">
                {!userProfile ?
                    <Background emptyUser={emptyUser} />
                    :
                    <UserProfile userProfile={userProfile} />
                }
            </div>
        </>
    )
}
