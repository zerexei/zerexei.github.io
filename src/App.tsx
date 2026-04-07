import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Articles } from './pages/Articles';
import { ArticleDetail } from './pages/ArticleDetail';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:slug" element={<ArticleDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
