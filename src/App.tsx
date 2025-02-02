import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import Layout from "./components/layout/Layout";
import Loading from "./components/loading/Loading";
import { routes } from "./routes/routes";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import awsconfig from "./amplifyConfig";

// ✅ Configure Amplify
Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <Routes>
            <Route
              path="/login"
              element={
                <div style={{ marginTop: "100px" }}>
                  <Authenticator socialProviders={["google"]} />
                </div>
              }
            />
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
