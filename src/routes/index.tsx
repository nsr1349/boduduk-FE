import { Routes, Route, BrowserRouter, Outlet, Navigate } from 'react-router';
import AdminLayout from '../components/layout/AdminLayout';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/HomePage';
import BoardGameListPage from '../pages/BoardGameListPage';
import BoardGameDetailPage from '../pages/BoardGameDetailPage';
import LoginPage from '../pages/LoginPage';
import SignInPage from '../pages/SignInPage';
import CartPage from '../pages/CartPage';
import MyPage from '../pages/MyPage';
import AdminBoardGamePage from '../pages/AdminBoardGamePage';
import AdminOrderPage from '../pages/AdminOrderPage';
import AdminUserPage from '../pages/AdminUserPage';
import NotFoundPage from '../pages/NotFoundPage';

const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('authToken');
  return !!token;
};

const getUserRole = (): 'user' | 'admin' | 'guest' => {
  const userRole = localStorage.getItem('userRole');
  if (userRole === 'admin') return 'admin';
  if (isAuthenticated()) return 'user';
  return 'guest';
};

const PrivateRoute = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

const AdminRoute = () => {
  const role = getUserRole();
  if (role !== 'admin') {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>} path='/'>
                  <Route index element={<HomePage />} />
                  <Route path="/boardGame" element={<BoardGameListPage />} />
                  <Route path="/boardGame/:id" element={<BoardGameDetailPage />} /> 쿼리 파라미터는 Route Path에 명시하지 않음
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signin" element={<SignInPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/my" element={<MyPage/>} />
            <Route path="/cart" element={<CartPage/>} />
          </Route>
        </Route>
        
        <Route path="/admin" element={<AdminRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<>123</>} />
                        <Route index element={<AdminOrderPage />} />
            <Route path="boardgames" element={<AdminBoardGamePage />} />
            <Route path="users" element={<AdminUserPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
