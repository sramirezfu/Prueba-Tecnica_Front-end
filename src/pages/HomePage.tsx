
import { Background, UserTable, Input, NotificationManager, GraphBar } from "../components";
import { useUserList } from "../hooks/useUserList";

export const HomePage = () => {

    const {
        error,
        query,
        users,
        followersData,
        userNames,
        emptyUser,
        handleClose,
        handleSearch,
        setQuery
    } = useUserList();

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
