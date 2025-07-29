import Layout from "@/components/Layout";
import Main from "./Main";
import BlogList from "./BlogList";
import Reviews from "@/components/Reviews";
import JoinCommunity from "@/components/JoinCommunity";

import { reviews } from "@/mocks/reviews";
import {useTranslation} from "@/contexts/LanguageContext";

const BlogPage = () => {
    const { t } = useTranslation()

    return (
        <Layout>
            <Main t={t} />
            <BlogList t={t} />
            <Reviews reviews={reviews} t={t} />
            <JoinCommunity title="Want to get involved?" t={t} />
        </Layout>
    );
};

export default BlogPage;
