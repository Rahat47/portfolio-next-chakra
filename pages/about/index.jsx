import Head from 'next/head';
import About from '../../sections/AboutMe';
import CTA from '../../sections/CTA';
import SkillsSection from '../../sections/SkillsSection';
import Work from '../../sections/Work';
import WorkStats from '../../sections/WorkStats';
import { getLinesOfCode } from '../../services/githubGQL';
import { getWorks } from '../../services/services';

const AboutPage = ({ works, totalRepos, totalLinesOfcode }) => {
    return (
        <>
            <Head>
                <title>About &mdash; Rahat</title>
            </Head>

            <About />

            <Work works={works} />

            <SkillsSection />

            <WorkStats
                totalLinesOfcode={totalLinesOfcode}
                totalRepos={totalRepos}
            />
            <CTA />
        </>
    );
};

export default AboutPage;

export async function getStaticProps() {
    const works = await getWorks();
    const { totalLinesOfcode, totalRepos } = await getLinesOfCode('Rahat47');

    return {
        props: {
            works,
            totalLinesOfcode,
            totalRepos,
        },
        revalidate: 20 * 60,
    };
}
