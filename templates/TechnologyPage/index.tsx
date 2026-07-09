import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Details from "./Details";
import Development from "./Development";
import Community from "./Community";
import AboutUs from "./AboutUs";
import Papers from "./Papers";
import Faq from "./Faq";
import JoinCommunity from "@/components/JoinCommunity";

import {useTranslation} from "@/contexts/LanguageContext";

const TechnologyPage = () => {
    const scrollToRef = useRef(null);
    const { t, locale } = useTranslation()

    return (
        <Layout>
            <Main scrollToRef={scrollToRef} t={t} />
            <Details scrollToRef={scrollToRef} t={t} locale={locale} />
            <Development t={t} />
            <Community t={t} />
            <AboutUs t={t} locale={locale} />
            <Papers t={t} locale={locale} />
            <Faq t={t} locale={locale} />
            <JoinCommunity title={t("join")} t={t} />
        </Layout>
    );
};

export default TechnologyPage;
