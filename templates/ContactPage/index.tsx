import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Details from "./Details";
import Reviews from "@/components/Reviews";
import JoinCommunity from "@/components/JoinCommunity";

import { reviews } from "@/mocks/reviews";
import {useTranslation} from "@/contexts/LanguageContext";

const ContactPage = () => {
    const scrollToRef = useRef(null);
    const { t } = useTranslation()

    return (
        <Layout>
            <Main scrollToRef={scrollToRef} t={t} />
            <Details scrollToRef={scrollToRef} t={t} />
            <Reviews reviews={reviews} t={t} />
            <JoinCommunity title="Want to get involved?" />
        </Layout>
    );
};

export default ContactPage;
