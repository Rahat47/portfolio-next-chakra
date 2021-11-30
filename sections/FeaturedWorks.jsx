import { Container, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { ProjectCard } from '../components';

const FeaturedWorks = () => {
    return (
        <Container
            maxW='7xl'
            py={20}
            bg={useColorModeValue('gray.200', 'gray.700')}
            as='section'
            rounded='sm'
        >
            <Text
                fontSize={{ base: '2xl', md: '5xl' }}
                color={useColorModeValue('black', 'white')}
                fontWeight='bold'
                fontFamily='Roboto'
                textAlign='center'
                mb={8}
                _after={{
                    content: '""',
                    display: 'block',
                    width: '100%',
                    height: '1px',
                    background: useColorModeValue('gray.500', 'white'),
                    margin: '0 auto',
                    marginBottom: '1rem',
                }}
            >
                Featured
                <Text
                    as='span'
                    color={useColorModeValue('orange.400', 'blue.400')}
                >
                    &nbsp;Projects
                </Text>
            </Text>

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
