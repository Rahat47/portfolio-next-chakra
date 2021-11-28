import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { Footer, Navbar } from '.';
const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Rayhan Rahat</title>
                <meta
                    name='description'
                    content='Personal Portfolio of Rayhan Hosain Rahat'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Box maxW='1280px' m='auto'>
                <header>
                    <Navbar />
                </header>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </>
    );
};

export default Layout;
