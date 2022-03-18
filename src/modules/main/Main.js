import React, { useState, useContext, createContext, Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { connect } from "react-redux";

import Header from "./header/Header";
import Footer from "./footer/Footer";

import Home from "../../pages/home/Home";
import NotFound from "../../pages/notfound/NotFound";
import Profile from "../../pages/profile/Profile";

class Main extends Component {
  render() {
    // console.log(this.props);
    return (
      <ProvideAuth>
        <div>
          <Header />

          <Routes>
            <Route path="/" element={<Home />}></Route>

            {/* <Route exact path="/profile" element={<Profile />} /> */}
            <Route
              exact
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      </ProvideAuth>
    );
  }
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

export default Main;
