import { useEffect } from "react";
import { Routes, Route, useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "@/utils/useAuth";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { Articles } from "@/pages/Articles";
import { ArticleDetail } from "@/pages/ArticleDetail";
import Login from "@/pages/Auth/Login";
import { Flashcards } from "@/pages/Flashcards";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const auth = useAuth();

  if (auth.isLoading) return <div className="min-h-screen flex items-center justify-center bg-black text-white">Loading...</div>;

  const ProtectedRoute = ({ isAuth }) => {
    return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
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
          <Route element={<ProtectedRoute isAuth={auth.isAuth} />}>
            <Route path="cards" element={<Flashcards />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
