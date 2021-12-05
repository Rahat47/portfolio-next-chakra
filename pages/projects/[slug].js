import { Center, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Fallback } from '../../components';
import ProjectDetailDesc from '../../sections/ProjectDetailsDesc';
import ProjectDetailsHero from '../../sections/ProjectDetailsHero';
import ProjectDetailsImg from '../../sections/ProjectDetailsImg';
import { getAllProjectsSlugs, getSingleProject } from '../../services/services';

const ProjectDetailPage = ({ project }) => {
    const router = useRouter();

    if (!project) {
        return <Fallback />;
    }

    return (
        <>
            <ProjectDetailsHero
                bg={project.cover.url}
                title={project.title}
                links={project.links}
            />
            <ProjectDetailDesc
                started={project.started}
                types={project.type}
                duration={project.duration}
                language={project.language}
                category={project.category.title}
                skills={project.skills}
                description={project.description}
                client={project.client}
            />
            <ProjectDetailsImg images={project.images} />

            <Center py={10}>
                <Button
                    size='lg'
                    variant='link'
                    onClick={() => router.push('/projects')}
                >
                    See more projects
                </Button>
            </Center>
        </>
    );
};

export default ProjectDetailPage;

export async function getStaticPaths() {
    const slugs = await getAllProjectsSlugs();

    // supports incremental build
    return {
        paths: slugs.map(item => ({
            params: { slug: item.slug },
        })),
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const project = await getSingleProject(params.slug);

    if (!project || !project.title) {
        return {
            redirect: {
                destination: '/projects',
                permanent: false,
            },
        };
    }

    return {
        props: {
            project,
        },
        // Revalidate the page every 20 minutes
        revalidate: 20 * 60,
    };
}
