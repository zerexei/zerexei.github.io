import { useEffect } from "react";
import { Routes, Route, useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "@/utils/useAuth";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { Articles } from "@/pages/Articles";
import { ArticleDetail } from "@/pages/ArticleDetail";
import Login from "@/pages/Auth/Login";
import { FlashcardGamePage } from "@/modules/flashcard/game/FlashcardGamePage";
import { FlashcardAdminPage } from "@/modules/flashcard/admin/FlashcardAdminPage";

const ADMIN_UID = import.meta.env.VITE_ADMIN_UID;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const auth = useAuth();

  if (auth.loading) return <div className="min-h-screen flex items-center justify-center bg-black text-white">Loading...</div>;

  const ProtectedRoute = ({ isAuth }: { isAuth: boolean }) => {
    return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
  };

  const AdminRoute = ({ isAuth, uid }: { isAuth: boolean; uid?: string }) => {
    if (!isAuth) return <Navigate to="/login" replace />;
    if (uid !== ADMIN_UID) return <Navigate to="/cards" replace />;
    return <Outlet />;
  };

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:slug" element={<ArticleDetail />} />
          
          {/* Authenticated Routes */}
          <Route element={<ProtectedRoute isAuth={auth.isAuth} />}>
            <Route path="cards" element={<FlashcardGamePage />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<AdminRoute isAuth={auth.isAuth} uid={auth.user?.uid} />}>
            <Route path="admin/cards" element={<FlashcardAdminPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
