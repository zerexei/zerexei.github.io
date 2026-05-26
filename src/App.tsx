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

import ROUTES from "@/routes";

const ADMIN_UID = import.meta.env.VITE_FIREBASE_ADMIN_UID;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const auth = useAuth();

  if (auth.loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );

  const ProtectedRoute = ({ isAuth }: { isAuth: boolean }) => {
    return isAuth ? <Outlet /> : <Navigate to={ROUTES.login.path} replace />;
  };

  const AdminRoute = ({ isAuth, uid }: { isAuth: boolean; uid?: string }) => {
    if (!isAuth) return <Navigate to={ROUTES.login.path} replace />;
    if (uid !== ADMIN_UID) return <Navigate to={ROUTES.flashcards.path} replace />;
    return <Outlet />;
  };

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path={ROUTES.home.path} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.login.path} element={<Login />} />
          <Route path={ROUTES.articles.path} element={<Articles />} />
          <Route
            path={ROUTES.articleDetail.path}
            element={<ArticleDetail />}
          />

          {/* Authenticated Routes */}
          <Route element={<ProtectedRoute isAuth={auth.isAuth} />}>
            <Route
              path={ROUTES.flashcards.path}
              element={<FlashcardGamePage />}
            />
          </Route>

          {/* Admin Routes */}
          <Route
            element={<AdminRoute isAuth={auth.isAuth} uid={auth.user?.uid} />}
          >
            <Route
              path={ROUTES.admin.flashcards.path}
              element={<FlashcardAdminPage />}
            />
          </Route>

          <Route path="*" element={<Navigate to={ROUTES.home.path} replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
