import Link from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div style={{ padding: 40 }}>
            <Link href="/" style={{ color: "#fff" }}>
                Home page
            </Link>
            <br></br>
            <Link href="/about-us" style={{ color: "#fff" }}>
                About us page
            </Link>
            <br></br>
            <Link href="/technology" style={{ color: "#fff" }}>
                Technology page
            </Link>
            <br></br>
            <Link href="/blog" style={{ color: "#fff" }}>
                Blog page
            </Link>
            <br></br>
            <Link href="/blog/article" style={{ color: "#fff" }}>
                Blog details page
            </Link>
            <br></br>
            <Link href="/careers" style={{ color: "#fff" }}>
                Careers page
            </Link>
            <br></br>
            <Link href="/contact" style={{ color: "#fff" }}>
                Contact page
            </Link>
        </div>
    );
};

export default Home;
