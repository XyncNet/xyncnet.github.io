import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Details from "./Details";
import Development from "./Development";
import Community from "./Community";
import AboutUs from "./AboutUs";
import Posts from "./Posts";
import Faq from "./Faq";
import Reviews from "@/components/Reviews";
import JoinCommunity from "@/components/JoinCommunity";

import { reviews } from "@/mocks/reviews";

const TechnologyPage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout>
            <Main scrollToRef={scrollToRef} />
            <Details scrollToRef={scrollToRef} />
            <Development />
            <Community />
            <AboutUs />
            <Posts />
            <Faq />
            <Reviews reviews={reviews} />
            <JoinCommunity title="Download our whitepaper" />
        </Layout>
    );
};

export default TechnologyPage;
