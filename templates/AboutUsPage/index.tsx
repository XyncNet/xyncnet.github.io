import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Details from "./Details";
import Values from "./Values";
import JoinCommunity from "@/components/JoinCommunity";

import {useTranslation} from "@/contexts/LanguageContext";

const AboutUsPage = () => {
    const scrollToRef = useRef(null);
    const { t } = useTranslation()

    return (
        <Layout>
            <Main scrollToRef={scrollToRef} t={t} />
            <Details scrollToRef={scrollToRef} t={t} />
            <Values t={t} />
            {/* Скрыто до появления реальных данных: команда, отзывы и цитаты
                были шаблонными заглушками (Richie Larson / Becky Stal / FauxChain).
            <Testimonial t={t} />
            <Team t={t} />
            <Reviews reviews={reviews} t={t} /> */}
            <JoinCommunity title={t("join")} t={t} />
        </Layout>
    );
};

export default AboutUsPage;
