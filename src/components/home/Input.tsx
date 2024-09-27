import { FC } from "react";

interface Props {
    query: string;
    setQuery: (query: string) => void;
}

export const Input: FC<Props> = ({ query, setQuery }) => {
    return (
        <div className="search-content_input">
            <input
                type="text"
                placeholder="Search users..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
            />
            <i className="fas fa-search"></i>
        </div>
    )
}
