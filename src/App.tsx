import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import { lazy } from "react";

const MainPage = lazy(() => import("./pages/mainpage/MainPage.tsx"));

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" index element={<MainPage />} />

        </Routes>
      </Layout>
    </>
  );
}

export default App;
