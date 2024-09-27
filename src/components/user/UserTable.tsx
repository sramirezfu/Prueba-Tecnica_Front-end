import { FC } from "react";
import { Link } from "react-router-dom";
import { User } from "../../interfaces";

interface Props {
    users: User[]
}

export const UserTable: FC<Props> = ({ users }) => {
    return (
        <div className="user-table-container">
            <table className="user-table">
                <thead>
                    <tr>
                        <th>User name</th>
                        <th>Profile git</th>
                        <th>Rol</th>
                        <th>Go</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="user-table_content-avatar">
                                <img src={user.avatar_url} alt={user.login} className="user-avatar" />
                                <div className="user-table-avatar_info">
                                    <span>{user.login}</span>
                                    <span>{user.id}</span>
                                </div>
                            </td>
                            <td>{user.html_url}</td>
                            <td>{user.type}</td>
                            <td> <Link to={`/user/${user.login}`}><i className="fa-solid fa-arrow-right"></i></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
