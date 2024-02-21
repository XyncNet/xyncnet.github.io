import Layout from "@/components/Layout";
import Main from "./Main";
import CareersList from "./CareersList";
import Reviews from "@/components/Reviews";
import JoinCommunity from "@/components/JoinCommunity";

import { reviews } from "@/mocks/reviews";

const HomePage = () => {
    return (
        <Layout>
            <Main />
            <CareersList />
            <Reviews reviews={reviews} />
            <JoinCommunity title="Want to get involved?" />
        </Layout>
    );
};

export default HomePage;
