import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { Layout } from '../components';
import nProgress from 'nprogress';
import '../styles/globals.css'
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    nProgress.configure({ showSpinner: false });

    const handleRouteChangeStart = () => {
        nProgress.start();
    };

    const handleRouteChangeComplete = () => {
        nProgress.done();
    };

    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    Router.events.on('routeChangeError', handleRouteChangeComplete);


    return (
        <>
            <Head>
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
                    integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=='
                    crossOrigin='anonymous'
                    referrerPolicy='no-referrer'
                />
            </Head>
            <DefaultSeo
                title='Rayhan Rahat'
                description='Rayhan Rahat is a web engineer based in Dhaka, Bangladesh. He is a full stack developer and a tech enthusiast.'
                openGraph={{
                    type: 'website',
                    locale: 'en_US',
                    url: 'https://rayhan-rahat.vercel.app/',
                    site_name: 'Rayhan Rahat',
                    images: [
                        {
                            url: 'https://rayhan-rahat.vercel.app/images/site-image.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'Rayhan Rahat',
                        },
                    ],
                }}
            />
            <ChakraProvider>
                <Layout>
                    <Component {...pageProps} key={router.route} />
                </Layout>
            </ChakraProvider>
        </>
    );
}

export default MyApp;
