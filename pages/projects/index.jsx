import ProjectsHero from '../../sections/ProjectsHero';
import Head from 'next/head';
import FeaturedWorks from '../../sections/FeaturedWorks';
import MoreProjects from '../../sections/MoreProjects';

const ProjectPage = () => {
    return (
        <>
            <Head>
                <title>Projects &mdash; Rahat</title>
            </Head>

            <ProjectsHero />
            <FeaturedWorks />
            <MoreProjects />
        </>
    );
};

export default ProjectPage;
