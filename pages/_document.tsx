import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta
                        content="Global payment systems aggregator: Bank & Crypto"
                        name="Xync Network"
                    />
                    <meta
                        content="Xync Network: XyncPAY"
                        property="og:title"
                    />
                    <meta
                        content="Xync PAY Global payment systems aggregator: Bank & Crypto"
                        property="og:description"
                    />
                    <meta
                        content="%PUBLIC_URL%/fb-og-image.png"
                        property="og:image"
                    />
                    <meta
                        property="og:url"
                        content="https://xync.net"
                    />
                    <meta
                        property="og:site_name"
                        content="Xync Network: XyncPAY"
                    />
                    <meta
                        content="Xync Network"
                        property="twitter:title"
                    />
                    <meta
                        content="XyncPAY: Global payment systems aggregator: Bank & Crypto"
                        property="twitter:description"
                    />
                    <meta
                        content="%PUBLIC_URL%/twitter-card.png"
                        property="twitter:image"
                    />
                    <meta property="og:type" content="Article" />
                    <meta content="summary" name="twitter:card" />
                    <meta name="twitter:site" content="@xyncnet" />
                    <meta name="twitter:creator" content="@xyncnet" />
                    <meta property="fb:admins" content="132951670226590" />
                    {/*<meta name="viewport" content="width=device-width, initial-scale=1"/> #todo how to replace it to _app.tsx*/}
                    <meta name="theme-color" content="#000000" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@700;900&family=Karla:wght@400;500;800&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="app">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
