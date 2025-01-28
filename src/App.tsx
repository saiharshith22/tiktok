import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import Layout from "./components/layout/Layout";
import Loading from "./components/loading/Loading";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <Routes>
            <Route element={<Layout />}>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Route>
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </Router>
  );
}

export default App;
