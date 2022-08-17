import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "../constants/routes";
import { LoginPage, ProductsPage } from "../pages";
import { PrivateRoute, Registration } from "../components";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.registration} element={<Registration />} />
        <Route path={routes.home} element={
            <PrivateRoute>
                <ProductsPage />
            </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
};
