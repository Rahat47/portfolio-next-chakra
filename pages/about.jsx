import About from '../sections/AboutMe';
import CTA from '../sections/CTA';
import Work from '../sections/Work';
import WorkStats from '../sections/WorkStats';
import Head from 'next/head';
const AboutPage = () => {
    return (
        <>
            <Head>
                <title>About &mdash; Rahat</title>
            </Head>
            <About />
            <Work />
            <WorkStats />
            <CTA />
        </>
    );
};

export default AboutPage;
