import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import { AppContainer } from "./styles.ts";
import { Provider } from "react-redux";
import { store } from "./store.ts";

import Header from "./components/header/index.tsx";
import Home from "./pages/home/index.tsx";
import PostPage from "./pages/post/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "post/:postId",
    Component: PostPage,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AppContainer>
        <Header />
        <RouterProvider router={router} />
      </AppContainer>
    </Provider>
  </StrictMode>,
);
