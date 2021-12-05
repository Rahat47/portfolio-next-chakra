/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {
    Text,
    Box,
    Image as ChakraImage,
    Flex,
    useColorModeValue,
    Tag,
    HStack,
    Link as ChakraLink,
    Button,
    Stack,
    useBreakpointValue,
    IconButton,
    chakra,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { BiDetail } from 'react-icons/bi';
import { backgrounds } from '../assets/data/backgroundsGradient';
import { useRouter } from 'next/router';
import moment from 'moment';

const ProjectCard = ({ project }) => {
    const router = useRouter();

    const randomNumber = () => {
        // return a random number from 1-4
        return Math.floor(Math.random() * 4);
    };

    return (
        <Flex
            bg={useColorModeValue('whiteAlpha.800', 'gray.600')}
            p={{
                base: 5,
                sm: 50,
            }}
            w='full'
            alignItems='center'
            justifyContent='center'
            zIndex={1}
            my={5}
        >
            <Box
                position='relative'
                mx='auto'
                rounded='lg'
                shadow='2xl'
                bg={useColorModeValue('white', 'gray.800')}
                maxW='2xl'
                _after={{
                    content: '""',
                    position: 'absolute',
                    zIndex: '-1',
                    height: 'full',
                    width: 'full',
                    filter: 'blur(45px)',
                    transform: 'scale(1.15)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: backgrounds[randomNumber()],
                }}
            >
                <Box overflow='hidden' maxH={64} w='full' roundedTop='lg'>
                    <Box
                        transition='all 3s ease'
                        _hover={{
                            transform: 'scale(1.3)',
                        }}
                    >
                        <Image
                            width={project.cover.width}
                            height={project.cover.height}
                            src={project.cover.url}
                            alt={project.title}
                            placeholder='blur'
                            blurDataURL={project.cover.url}
                        />
                    </Box>
                </Box>

                <Box p={6}>
                    <Box>
                        <Flex justifyContent='space-between'>
                            <HStack spacing={4}>
                                <Tag
                                    fontSize='xs'
                                    textTransform='uppercase'
                                    color={useColorModeValue(
                                        'brand.600',
                                        'brand.400'
                                    )}
                                >
                                    {project.category.title}
                                </Tag>
                            </HStack>

                            <Tag colorScheme='teal'>
                                {moment(project.started).format('MMM YYYY')}
                            </Tag>
                        </Flex>
                        <Link
                            href={`/projects/${project.slug}`}
                            passHref
                            scroll={false}
                        >
                            <ChakraLink
                                display='block'
                                color={useColorModeValue('gray.800', 'white')}
                                fontWeight='bold'
                                fontSize='2xl'
                                mt={2}
                                _hover={{
                                    color: 'gray.600',
                                    textDecor: 'underline',
                                }}
                            >
                                {project.title}
                            </ChakraLink>
                        </Link>
                        <Text
                            as='p'
                            mt={2}
                            fontSize='sm'
                            color={useColorModeValue('gray.600', 'gray.400')}
                        >
                            {project.simpleDescription}
                        </Text>
                    </Box>

                    <Box mt={4}>
                        <Flex
                            alignItems='center'
                            justify={{
                                base: 'center',
                                md: 'flex-start',
                            }}
                        >
                            <Stack wrap='wrap' direction='row'>
                                {project.links.source &&
                                    useBreakpointValue({
                                        base: (
                                            <IconButton
                                                as='a'
                                                href={project.links.source}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                icon={<FaGithub />}
                                            />
                                        ),
                                        md: (
                                            <Button
                                                as='a'
                                                href={project.links.source}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                rightIcon={<FaGithub />}
                                            >
                                                View Source
                                            </Button>
                                        ),
                                    })}

                                {project.links.live &&
                                    useBreakpointValue({
                                        base: (
                                            <IconButton
                                                as='a'
                                                href={project.links.live}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                icon={<FaExternalLinkAlt />}
                                            />
                                        ),
                                        md: (
                                            <Button
                                                as='a'
                                                href={project.links.live}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                rightIcon={
                                                    <FaExternalLinkAlt />
                                                }
                                            >
                                                Live
                                            </Button>
                                        ),
                                    })}

                                {useBreakpointValue({
                                    base: (
                                        <IconButton
                                            onClick={() =>
                                                router.push(
                                                    `/projects/${project.slug}`
                                                )
                                            }
                                            icon={<BiDetail />}
                                        />
                                    ),
                                    md: (
                                        <Button
                                            onClick={() =>
                                                router.push(
                                                    `/projects/${project.slug}`
                                                )
                                            }
                                            rightIcon={<BiDetail />}
                                        >
                                            View Details
                                        </Button>
                                    ),
                                })}
                            </Stack>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};

export default ProjectCard;
