import About from '../sections/AboutMe';
import CTA from '../sections/CTA';
import Work from '../sections/Work';
import WorkStats from '../sections/WorkStats';
import Head from 'next/head';
import SkillsSection from '../sections/SkillsSection';
import { getWorks } from '../services/services';
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
    const works = await getWorks();

    return {
        props: {
            works,
        },
        revalidate: 20 * 60,
    };
}
