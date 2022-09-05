import Head from "next/head";
import Navbar from "./Navbar";

function Header({ title }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="author" content="Yu-Chia Chen" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{title}</title>
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <Navbar />
        </>
    );
}

export default Header;
