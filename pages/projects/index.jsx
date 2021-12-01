import Head from 'next/head';
import ProjectsHero from '../../sections/ProjectsHero';
import FeaturedWorks from '../../sections/FeaturedWorks';
import MoreProjects from '../../sections/MoreProjects';
import ProjectsCTA from '../../sections/ProjectsCTA';
const ProjectPage = () => {
    return (
        <>
            <Head>
                <title>Projects &mdash; Rahat</title>
            </Head>

            <ProjectsHero />
            <FeaturedWorks />
            <MoreProjects />
            <ProjectsCTA />
        </>
    );
};

export default ProjectPage;
