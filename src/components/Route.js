// Route.js

import { Routes, Route } from 'react-router-dom';
import Layout from '../components/common/Layout';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';

const Router = () => {
    return (
        <Routes>
            <Route element={<Layout />}>    {/* 부모 라우트 */}
                <Route path="/admin/login" element={<LoginPage />} />  {/* 자식 라우트 */}
                <Route path="/main" element={<MainPage />} />  {/* 자식 라우트 */}
                <Route path="/" element={<MainPage />} />
            </Route>
        </Routes>
    );
};

export default Router;