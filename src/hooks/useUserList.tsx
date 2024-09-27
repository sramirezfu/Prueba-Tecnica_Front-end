import { useState } from "react";
import { User } from "../interfaces";
import { getUserList, getUserFollowers } from "../services";

export const useUserList = () => {

    const [query, setQuery] = useState('');
    const [users, setUsers] = useState<User[]>([]);
    const [emptyUser, setEmptyUser] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [followersData, setFollowersData] = useState<number[]>([]);
    const [userNames, setUserNames] = useState<string[]>([]);

    const handleSearch = () => {
        if (query.length < 4 || query === 'iseijasunow') {
            setError('El término de búsqueda no es válido');
            setUsers([]);
            setQuery('');
            return;
        }
        getUserList(query)
            .then(async (users) => {
                const slicedUsers = users.slice(0, 10);
                setUsers(slicedUsers);
                const followersPromises = slicedUsers.map(user => getUserFollowers(user.login));
                setUserNames(slicedUsers.map(user => user.login));
                const followersCounts = await Promise.all(followersPromises);
                setFollowersData(followersCounts);
                users.length === 0 && setEmptyUser('No user found, try again....');
            })
            .catch(error => {
                console.log(error);
                setError('Error getting users')
            });
    };

    const handleClose = () => {
        setError(null);
    };

    return {
        // properties
        query,
        users,
        emptyUser,
        error,
        followersData,
        userNames,

        // methods
        handleSearch,
        handleClose,
        setQuery
    }
}
