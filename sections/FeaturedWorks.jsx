import { Container, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { HeadingBB, ProjectCard } from '../components';

const FeaturedWorks = () => {
    return (
        <Container
            maxW='7xl'
            py={20}
            bg={useColorModeValue('gray.200', 'gray.700')}
            as='section'
            rounded='sm'
            id='featured-works'
        >
            <HeadingBB text='Featured' coloredText='Projects' />

            <Flex direction='column'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </Flex>
        </Container>
    );
};

export default FeaturedWorks;
