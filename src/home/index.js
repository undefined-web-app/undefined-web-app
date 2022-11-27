import ReviewSummaryList from "../review-summary-list";
import header from "../search/header";
import Header from "../search/header";
import SearchInput from "../search/search-input";

const Home = () => {
    console.log(Date.now());
    return (
        <>
            <Header/>
            <SearchInput/>
            <ReviewSummaryList/>
        </>
    )
};

export default Home;