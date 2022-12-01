import "./App.css";
import Home from "./home";
import Search from "./search";
import UserList from "./users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import reviewsReducer from "./reducers/reviews-reducer";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import usersReducer from "./users/users-reducer";
import Register from "./users/register";
import Login from "./users/login";
import Profile from "./users/profile";
import Navigation from "./navigation";
import CurrentUser from "./users/current-user";
import Detail from "./detail/index";
import bookmarkReducer from "./reducers/bookmark-reducer";
import EditProfile from "./users/edit-profile";

const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    users: usersReducer,
    bookmarks: bookmarkReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <CurrentUser>
        <BrowserRouter>
          <div className="container">
            <Navigation />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/search/:title" element={<Search />} />
              <Route path="/search" element={<Search />} />
              <Route path="/detail/:imdbID" element={<Detail />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/edit-profile" element={<EditProfile />} />
              {/*<Route path="/login"*/}
              {/*       element={<Login/>}/>*/}
            </Routes>
          </div>
        </BrowserRouter>
      </CurrentUser>
    </Provider>
  );
}

export default App;
