const ROUTES = {
  home: {
    name: "home",
    path: "/",
    title: "Home",
  },

  login: {
    name: "login",
    path: "/login",
    title: "Login",
  },

  articles: {
    name: "articles",
    path: "/articles",
    title: "Articles",
  },

  articleDetail: {
    name: "articleDetail",
    path: "/articles/:slug",
    title: "Article",
    getPath: (slug: string) => `/articles/${slug}`,
  },

  flashcards: {
    name: "flashcards",
    path: "/flash-cards",
    title: "Flashcards",
  },

  systemDesign: {
    name: "systemDesign",
    path: "/system-design",
    title: "System Design",
  },

  admin: {
    flashcards: {
      name: "admin.flashcards",
      path: "/admin/flash-cards",
      title: "Admin Flashcards",
    },
  },
};

export default ROUTES;
