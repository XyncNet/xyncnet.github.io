import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Details from "./Details";
import Testimonial from "./Testimonial";
import Team from "./Team";
import Values from "./Values";
import Reviews from "@/components/Reviews";
import JoinCommunity from "@/components/JoinCommunity";

import { reviews } from "@/mocks/reviews";
import {useTranslation} from "@/contexts/LanguageContext";

const AboutUsPage = () => {
    const scrollToRef = useRef(null);
    const { t } = useTranslation()

    return (
        <Layout>
            <Main scrollToRef={scrollToRef} t={t} />
            <Details scrollToRef={scrollToRef} t={t} />
            <Testimonial t={t} />
            <Team t={t} />
            <Values t={t} />
            <Reviews reviews={reviews} t={t} />
            <JoinCommunity title="Download our whitepaper" t={t} />
        </Layout>
    );
};

export default AboutUsPage;
