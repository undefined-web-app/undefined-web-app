import './App.css';
import Home from "./home";
import Search from "./search";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {configureStore} from "@reduxjs/toolkit";
import reviewsReducer from "./reducers/reviews-reducer";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore(
    {reducer: {reviews: reviewsReducer}});

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
            <div className="container">
              <Routes>
                <Route index
                       element={<Home/>}/>
                <Route path="/search/:title"
                       element={<Search/>}/>
                {/*<Route path="/login"*/}
                {/*       element={<Login/>}/>*/}
              </Routes>
            </div>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
