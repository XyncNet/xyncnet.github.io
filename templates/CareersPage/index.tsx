import Layout from "@/components/Layout";
import Main from "./Main";
import CareersList from "./CareersList";
import Reviews from "@/components/Reviews";
import JoinCommunity from "@/components/JoinCommunity";

import { reviews } from "@/mocks/reviews";
import {useTranslation} from "@/contexts/LanguageContext";

const HomePage = () => {
    const { t } = useTranslation()

    return (
        <Layout>
            <Main t={t} />
            <CareersList t={t} />
            <Reviews reviews={reviews} t={t} />
            <JoinCommunity title={t("join")} t={t} />
        </Layout>
    );
};

export default HomePage;
