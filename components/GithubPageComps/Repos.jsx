import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState, useCallback } from 'react';
import { RepoCard } from '.';
import { CustomSelect, Option } from '..';
import { getUserRepos } from '../../services/githubGQL';
import { AnimatePresence, motion } from 'framer-motion';
const Repos = ({ repos, username }) => {
    const [repositories, setRepositories] = useState(repos);
    const [filter, setFilter] = useState('stargazerCount');
    const [filteredRepos, setFilteredRepos] = useState([]);

    const getRepos = useCallback(async () => {
        const data = await getUserRepos(username);

        setRepositories(data);
    }, [username]);

    const LIMIT = 9;

    useEffect(() => {
        const sortedByName = repositories.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        const sorted = sortedByName.sort((a, b) => b[filter] - a[filter]);

        const sliced = sorted.slice(0, LIMIT);

        setFilteredRepos(sliced);
    }, [filter, repositories]);

    useEffect(() => {
        getRepos();
    }, [getRepos]);

    return (
        <Container as='section' maxW='7xl'>
            <Box
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
            >
                <Stack
                    spacing={4}
                    isInline
                    justify='center'
                    alignItems='center'
                >
                    <Heading
                        textAlign='center'
                        fontFamily='Roboto'
                        fontWeight={300}
                    >
                        Top {LIMIT} Repos By
                    </Heading>

                    <Box>
                        {/* <Select
                            placeholder='Select option'
                            colorScheme='blue'
                            value={filter}
                            onChange={e => setFilter(e.target.value)}
                        >
                            <option value='stargazerCount'>Stars 🌟</option>
                            <option value='forkCount'>Forks 🍴</option>
                            <option value='diskUsage'>Size 📦</option>
                        </Select> */}
                        <CustomSelect
                            name='filter'
                            colorScheme='orange'
                            value={filter}
                            onChange={e => setFilter(e)}
                            placeholder='Select a filter'
                        >
                            <Option value='stargazerCount'>Stars 🌟</Option>
                            <Option value='forkCount'>Forks 🍴</Option>
                            <Option value='diskUsage'>Size 📦</Option>
                        </CustomSelect>
                    </Box>
                </Stack>

                <AnimatePresence exitBeforeEnter>
                    <SimpleGrid
                        columns={{
                            base: 1,
                            md: 2,
                            lg: 3,
                        }}
                        gap={6}
                        my={8}
                    >
                        {filteredRepos.map(repo => (
                            <motion.div
                                key={repo.id}
                                variants={{
                                    initial: {
                                        opacity: 0,
                                        y: -20,
                                        scale: 0.7,
                                    },
                                    enter: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        transition: {
                                            type: 'spring',
                                            stiffness: 100,
                                            damping: 15,
                                            staggerChildren: 0.2,
                                            duration: 0.5,
                                        },
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -20,
                                        scale: 0.7,
                                        transition: {
                                            type: 'spring',
                                            stiffness: 100,
                                            damping: 15,
                                            staggerChildren: 0.2,
                                            duration: 1,
                                        },
                                    },
                                }}
                                initial='initial'
                                animate='enter'
                                exit='exit'
                                style={{
                                    display: 'flex',
                                }}
                            >
                                <RepoCard repo={repo} />
                            </motion.div>
                        ))}
                    </SimpleGrid>
                </AnimatePresence>
            </Box>
        </Container>
    );
};

export default Repos;
