import { useState } from "react";
import { User } from "../interfaces";
import { getUserFollowers, getUserList } from "../services";
import { Background, UserTable, Input, NotificationManager, GraphBar } from "../components";

export const HomePage = () => {

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

    return (
        <>
            {error && <NotificationManager message={error} onClose={handleClose} />}
            <div className="home">
                <h1 className="home-title">User Management</h1>
                <h4 className="home-subtitle">Manage your team members and their information here</h4>
                <div className="home-search">
                    <div className="home-total_users">
                        <span className="home-total_users-name">Users</span>
                        {users.length > 0 && <span className="home-total_users-number">{users.length}</span>}
                    </div>
                    <div className="home-content_search">
                        <Input query={query} setQuery={setQuery} />
                        <button onClick={handleSearch}>Buscar</button>
                    </div>
                </div>
                {users.length <= 0 ?
                    <Background emptyUser={emptyUser} />
                    :
                    <>
                        <UserTable users={users} />
                        <GraphBar followerData={followersData} userNames={userNames} />
                    </>
                }
            </div>
        </>
    )
}
