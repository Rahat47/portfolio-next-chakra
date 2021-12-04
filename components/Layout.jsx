import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Footer, Navbar } from '.';
import { useRouter } from 'next/router';
const Layout = ({ children }) => {
    const router = useRouter();

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
            <Box maxW='8xl' m='auto'>
                <header>
                    <Navbar />
                </header>
                <motion.main
                    initial='hidden'
                    animate='enter'
                    exit='exit'
                    variants={{
                        hidden: { opacity: 0, x: -200, y: 0 },
                        enter: { opacity: 1, x: 0, y: 0 },
                        exit: { opacity: 0, x: 0, y: -100 },
                    }}
                    transition={{ type: 'linear' }}
                    key={router.route}
                >
                    {children}
                </motion.main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </>
    );
};

export default Layout;
