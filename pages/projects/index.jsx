import ProjectsHero from '../../sections/ProjectsHero';
import Head from 'next/head';
import FeaturedWorks from '../../sections/FeaturedWorks';

const ProjectPage = () => {
    return (
        <>
            <Head>
                <title>Projects &mdash; Rahat</title>
            </Head>

            <ProjectsHero />
            <FeaturedWorks />
        </>
    );
};

export default ProjectPage;
