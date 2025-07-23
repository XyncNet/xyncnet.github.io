import type {AppProps} from "next/app";
import {ParallaxProvider} from "react-scroll-parallax";
import "../styles/app.sass";
import {LanguageProvider} from "../contexts/LanguageContext";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <LanguageProvider>
            <ParallaxProvider>
                <Component {...pageProps} />
            </ParallaxProvider>
        </LanguageProvider>
    );
}

export default MyApp;
