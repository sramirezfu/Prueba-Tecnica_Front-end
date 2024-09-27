import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, UserProfilePage } from "../pages";
import { Header } from '../components';

export const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/user/:login" element={<UserProfilePage />} />
            </Routes>
        </Router>
    )
}
