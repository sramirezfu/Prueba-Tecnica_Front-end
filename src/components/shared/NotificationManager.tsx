import { FC } from "react";

interface NotificationProps {
    message: string;
    onClose: () => void;
}

export const NotificationManager: FC<NotificationProps> = ({ message, onClose }) => {
    return (
        <div className="notification">
            <div className="notification-content">
                <p>{message}</p>
                <button className="close-button" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
            </div>
        </div>
    )
}
