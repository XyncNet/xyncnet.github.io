import { useEffect } from "react";
import { useRouter } from "next/router";
import { enablePageScroll, clearQueueScrollLocks } from "scroll-lock";
import Head from "next/head";
import cn from "classnames";
import styles from "./Layout.module.sass";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {useTranslation} from "@/contexts/LanguageContext";

type LayoutProps = {
    layoutNoOverflow?: boolean;
    children: React.ReactNode;
};

const Layout = ({ layoutNoOverflow, children }: LayoutProps) => {
    const { pathname } = useRouter();

    useEffect(() => {
        clearQueueScrollLocks();
        enablePageScroll();
    }, [pathname]);
    const { t } = useTranslation()

    return (
        <>
            <Head>
                <title>XyncNet - Xyncronized network</title>
            </Head>
            <div
                className={cn(styles.layout, {
                    [styles.layoutNoOverflow]: layoutNoOverflow,
                })}
            >
                <Header/>
                {children}
                <Footer t={t} />
            </div>
        </>
    );
};

export default Layout;
