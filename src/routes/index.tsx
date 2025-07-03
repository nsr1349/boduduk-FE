import { Routes, Route, BrowserRouter, Outlet, Navigate } from 'react-router';
import AdminLayout from '../components/layout/AdminLayout';
import Layout from '../components/layout/Layout';

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
                  {/* 누구나 접근 가능한 Public 라우트 */}
                  {/* <Route path="/" element={<HomePage />} /> */}
                  {/* <Route path="/boardgame" element={<BoardgameListPage />} /> */}
                  {/* <Route path="/boardgame/detail" element={<BoardgameDetailPage />} /> 쿼리 파라미터는 Route Path에 명시하지 않음 */}
                  {/* <Route path="/login" element={<LoginPage />} /> */}
                  {/* <Route path="/signin" element={<SignInPage />} /> */}
                  {/* 로그인한 사용자만 접근 가능한 라우트 */}
          <Route element={<PrivateRoute />}>
            <Route path="/my" element={<>my</>} />
            <Route path="/cart" element={<>cart</>} />
          </Route>
        </Route>
        



        {/* 관리자만 접근 가능한 라우트 */}
        <Route path="/admin" element={<AdminRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<>123</>} />
                        {/* <Route index element={<AdminDashboardPage />} />
            <Route path="boardgames" element={<AdminBoardgameManagePage />} />
            <Route path="users" element={<AdminUserManagePage />} /> */}
          </Route>
        </Route>

        {/* 404 Not Found 페이지 */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
