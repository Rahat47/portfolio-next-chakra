import About from '../sections/AboutMe';
import CTA from '../sections/CTA';
import Work from '../sections/Work';
import WorkStats from '../sections/WorkStats';
import Head from 'next/head';
import SkillsSection from '../sections/SkillsSection';
const AboutPage = () => {
    return (
        <>
            <Head>
                <title>About &mdash; Rahat</title>
            </Head>

            <About />

            <Work />

            <SkillsSection />

            <WorkStats />
            <CTA />
        </>
    );
};

export default AboutPage;
