import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Development from "./Development";
import AboutUs from "./AboutUs";
import Statistics from "./Statistics";
import Solutions from "./Solutions";
import Posts from "@/components/Posts";
import Reviews from "@/components/Reviews";
import JoinCommunity from "@/components/JoinCommunity";

import { posts } from "@/mocks/posts";
import { reviews } from "@/mocks/reviews";
import {useTranslation} from "@/contexts/LanguageContext";

const HomePage = () => {
    const scrollToRef = useRef(null);
    const { t, locale } = useTranslation()

    return (
        <Layout>
            <Main scrollToRef={scrollToRef} t={t} locale={locale} />
            <Development scrollToRef={scrollToRef} t={t} />
            <AboutUs t={t} locale={locale} />
            <Statistics t={t} />
            {/*<Solutions t={t} />*/}
            {/*<Posts*/}
            {/*    className="section"*/}
            {/*    title="Your gateway to everything Xync."*/}
            {/*    info="Stay current on the latest Xync project developments, news, and content, updated daily."*/}
            {/*    posts={posts}*/}
            {/*    t={t}*/}
            {/*/>*/}
            {/*<Reviews reviews={reviews} t={t} />*/}
            <JoinCommunity title="Want to get involved?" />
        </Layout>
    );
};

export default HomePage;
