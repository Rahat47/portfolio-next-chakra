import { useRouter } from 'next/router';
import {
    Box,
    Center,
    IconButton,
    Text,
    Stack,
    useColorModeValue,
    Tag,
    Link as ChakraLink,
    Flex,
} from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineRightSquare } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import moment from 'moment';

export default function ProjectCardSm({ project }) {
    const router = useRouter();

    return (
        <Center py={6}>
            <Box
                maxW={'445px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}
            >
                <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}
                    overflow='hidden'
                >
                    <Box>
                        <Image
                            src={project.cover.url}
                            alt={project.title}
                            width={project.cover.width}
                            height={project.cover.height}
                            placeholder='blur'
                            blurDataURL={project.cover.url}
                        />
                    </Box>
                </Box>
                <Stack spacing='4'>
                    <Flex justify='space-between'>
                        <Text>
                            <Tag
                                textTransform={'uppercase'}
                                fontFamily='Roboto'
                                fontSize={'sm'}
                                colorScheme='green'
                            >
                                {project.category.title}
                            </Tag>
                        </Text>

                        <Text>
                            <Tag
                                textTransform={'uppercase'}
                                fontFamily='Roboto'
                                fontSize={'sm'}
                                colorScheme='blue'
                            >
                                {moment(project.started).format('MMM YYYY')}
                            </Tag>
                        </Text>
                    </Flex>
                    <Link
                        scroll={false}
                        href={`/projects/${project.slug}`}
                        passHref
                    >
                        <ChakraLink
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'Roboto'}
                        >
                            {project.title}
                        </ChakraLink>
                    </Link>
                    <Text color={'gray.500'}>
                        {project.simpleDescription.length > 100
                            ? project.simpleDescription.substring(0, 100) +
                              '...'
                            : project.simpleDescription}
                    </Text>

                    <Stack isInline justify='center'>
                        {project.links.source && (
                            <IconButton
                                as='a'
                                href={project.links.source}
                                target='_blank'
                                rel='noopener noreferrer'
                                icon={<FaGithub />}
                            />
                        )}
                        {project.links.live && (
                            <IconButton
                                as='a'
                                href={project.links.live}
                                target='_blank'
                                rel='noopener noreferrer'
                                icon={<BiLinkExternal />}
                            />
                        )}
                        <IconButton
                            onClick={() =>
                                router.push(`/projects/${project.slug}`)
                            }
                            icon={<AiOutlineRightSquare />}
                        />
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
}
