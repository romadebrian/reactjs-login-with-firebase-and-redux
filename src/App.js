import React, { useContext, createContext, useState, Fragment } from "react"; //rfce
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

// import Dashboard from "./pages/dashboard/Dashboard";
// import Admin from "./pages/admin/Admin";
import Main from "./modules/main/Main";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./modules/login/Login";

// import logo from "./logo.svg";
// import "./App.css";

export default function App() {
  // const [statusLogin, setStatusLogin] = useState(false);

  return (
    <ProvideAuth>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login />} />

            <Route
              exact
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Routes>
        </Fragment>
      </Router>
    </ProvideAuth>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.

const authContext = createContext();

function PrivateRoute({ children, ...rest }) {
  let auth = useContext(authContext);
  let location = useLocation();
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (cb) => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = (cb) => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout,
  };
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

// const PrivateRoute = () => {
//   const statusLogin = false;
//   if (statusLogin) {
//     return <Navigate to="/public" />;
//   } else {
//     return <Navigate to="/login" />;
//   }
// };

// function PublicPage() {
//   return <h3>Public</h3>;
// }

// function ProtectedPage() {
//   return <h3>Protected</h3>;
// }
