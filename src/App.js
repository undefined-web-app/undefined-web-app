import "./App.css";
import Home from "./home";
import Search from "./search";
import UserList from "./users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import reviewsReducer from "./reducers/reviews-reducer";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import usersReducer from "./users/users-reducer";
import Register from "./users/register";
import Login from "./users/login";
import Profile from "./users/profile";
import Navigation from "./navigation";
import CurrentUser from "./users/current-user";

const store = configureStore({
  reducer: { reviews: reviewsReducer, users: usersReducer },
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
              <Route path="/users" element={<UserList />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
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
