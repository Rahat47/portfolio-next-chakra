import About from '../sections/AboutMe';
import CTA from '../sections/CTA';
import Work from '../sections/Work';
import WorkStats from '../sections/WorkStats';
import Head from 'next/head';
import SkillsSection from '../sections/SkillsSection';
import { getRequest } from '../services/services';
const AboutPage = ({ works }) => {
    return (
        <>
            <Head>
                <title>About &mdash; Rahat</title>
            </Head>

            <About />

            <Work works={works} />

            <SkillsSection />

            <WorkStats />
            <CTA />
        </>
    );
};

export default AboutPage;

export async function getStaticProps() {
    const data = await getRequest('work-experiences', {
        query: {
            populate: 'skills',
        },
    });

    return {
        props: {
            works: data.data,
        },
    };
}
