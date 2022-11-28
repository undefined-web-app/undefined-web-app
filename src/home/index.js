import ReviewSummaryList from "../review-summary-list";
import SearchInput from "../search/search-input";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { profileThunk } from "../users/users-thunks";

const Home = () => {
  /*const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);*/
  return (
    <>
      {/*{currentUser && <h2>Welcome {currentUser.username}</h2>}*/}
      <SearchInput />
      <ReviewSummaryList />
    </>
  );
};

export default Home;
