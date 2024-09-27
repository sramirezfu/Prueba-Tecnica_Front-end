import { FC } from "react";
import logoUsers from "../../assets/images/backgroundHome.jpg";

interface Props {
    emptyUser: string;
}

export const Background: FC<Props> = ({ emptyUser }) => {
    return (
        <div className="home-img">
            <img src={logoUsers} alt="Background users" />
            {!emptyUser ?
                <p>Start managing your team, search for a user....</p>
                :
                <p>No user found, try again....</p>
            }
        </div>
    )
}
