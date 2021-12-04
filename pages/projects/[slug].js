import { Center, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import ProjectDetailDesc from "../../sections/ProjectDetailsDesc";
import ProjectDetailsHero from "../../sections/ProjectDetailsHero";
import ProjectDetailsImg from "../../sections/ProjectDetailsImg";

const ProjectDetailPage = () => {
    const router = useRouter();

    return (
        <>
            <ProjectDetailsHero />
            <ProjectDetailDesc />
            <ProjectDetailsImg />

            <Center py={10}>
                <Button size="lg" variant="link" onClick={() => router.push('/projects')} >See more projects</Button>
            </Center>
        </>
    );
};

export default ProjectDetailPage;