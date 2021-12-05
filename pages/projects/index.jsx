import Head from 'next/head';
import ProjectsHero from '../../sections/ProjectsHero';
import FeaturedWorks from '../../sections/FeaturedWorks';
import MoreProjects from '../../sections/MoreProjects';
import ProjectsCTA from '../../sections/ProjectsCTA';
import { getFeaturedProjects, getMoreProjects } from '../../services/services';
const ProjectPage = ({ featuredProjects, moreProjects }) => {
    return (
        <>
            <Head>
                <title>Projects &mdash; Rahat</title>
            </Head>

            <ProjectsHero />
            <FeaturedWorks featuredProjects={featuredProjects} />
            <MoreProjects moreProjects={moreProjects} />
            <ProjectsCTA />
        </>
    );
};

export default ProjectPage;

export async function getStaticProps() {
    const featuredProjects = await getFeaturedProjects();
    const moreProjects = await getMoreProjects();

    return {
        props: {
            featuredProjects,
            moreProjects,
        },
    };
}
