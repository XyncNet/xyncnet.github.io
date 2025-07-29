import Layout from "@/components/Layout";
import Main from "./Main";
import Content from "./Content";
import Posts from "@/components/Posts";
import JoinCommunity from "@/components/JoinCommunity";

import { posts } from "@/mocks/posts";
import {useTranslation} from "@/contexts/LanguageContext";

const ArticlePage = () => {
    const { t } = useTranslation()

    return (
        <Layout>
            <Main t={t} />
            <Content t={t} />
            <Posts
                title="You may also like"
                info="Stay current on the latest Xync project developments, news, and content, updated daily."
                posts={posts}
                background
                t={t}
            />
            <JoinCommunity title="Download our whitepaper" t={t} />
        </Layout>
    );
};

export default ArticlePage;
