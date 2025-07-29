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
import {useTranslation} from "@/contexts/LanguageContext";

const TechnologyPage = () => {
    const scrollToRef = useRef(null);
    const { t } = useTranslation()

    return (
        <Layout>
            <Main scrollToRef={scrollToRef} t={t} />
            <Details scrollToRef={scrollToRef} t={t} />
            <Development t={t} />
            <Community t={t} />
            <AboutUs t={t} />
            <Posts t={t} />
            <Faq t={t} />
            <Reviews reviews={reviews} t={t} />
            <JoinCommunity title="Download our whitepaper" t={t} />
        </Layout>
    );
};

export default TechnologyPage;
