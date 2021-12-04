import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
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
                <AnimatePresence exitBeforeEnter>
                    <motion.main
                        initial='hidden'
                        animate='enter'
                        exit='exit'
                        variants={{
                            hidden: {
                                opacity: 0,
                                translateY: '-600px',
                                rotateX: '-30deg',
                                scale: 0,
                            },
                            enter: {
                                opacity: 1,
                                translateY: '0px',
                                rotateX: '0deg',
                                scale: 1,
                            },
                            exit: { opacity: 0, x: 0, y: -100 },
                        }}
                        transition={{ type: 'linear', duration: 0.5 }}
                        key={router.route}
                    >
                        {children}
                    </motion.main>{' '}
                </AnimatePresence>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </>
    );
};

export default Layout;
