import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, UserProfilePage } from "../pages";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/user/:login" element={<UserProfilePage />} />
            </Routes>
        </Router>
    )
}
