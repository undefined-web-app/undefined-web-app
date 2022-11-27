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
import Header from "./header";
import Register from "./users/register";

const store = configureStore({
  reducer: { reviews: reviewsReducer, users: usersReducer },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/search/*" element={<Search />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/register" element={<Register />} />
            {/*<Route path="/login"*/}
            {/*       element={<Login/>}/>*/}
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
