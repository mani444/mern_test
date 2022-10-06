import { Route, Navigate } from "react-router-dom";
import Login from "../containers/Login/Login";

// function PrivateRoute({ children }) {
//   const { isAuthenticated } = useAuth0();
//   return isAuthenticated ? children : <Navigate to="/login" />;
// }

const routes = [
  <Route path="/" element={<Login />} key="login" />,
  //   <Route
  //     path="/upgrade"
  //     element={
  //       <PrivateRoute>
  //         <PricingPage />
  //       </PrivateRoute>
  //     }
  //     key="pricing"
  //   />,
  //   <Route path="/login" element={<LoginPage />} key="login" />,
  //   <Route path="/signup" element={<SignInSignUpPage />} key="signin" />,
];

export default routes;
