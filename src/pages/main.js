import HeaderComponent from "../components/Header";
import BannerVideo from "../components/BannerVideo";
import ListingProperties from "../components/listingProperties";
import StoryContent from "../components/storyContent";
import ReviewContent from "../components/reviewContent";
import Footer from "../components/footer";
import FeatureNeighbour from "../components/FeatureNeighbour";
import BuyorSell from "../components/BuySell";
import BlogContent from "../components/BlogContent";
import PropertyList from '../components/propertylist';

function Main() {
    return (
        <>
            <BannerVideo />
            <ListingProperties />
            {/* <PropertyList /> */}
            <StoryContent />
            <FeatureNeighbour />
            <BuyorSell />
            <BlogContent />
            <ReviewContent />
        </>
    )
}

export default Main