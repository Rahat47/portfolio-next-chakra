import {
    Box,
    chakra,
    Container,
    Heading,
    Select,
    SimpleGrid,
    Stack,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { RepoCard } from '.';
import { CustomSelect, Option } from '..';
import FlipMove from 'react-flip-move';
const Repos = ({ repos }) => {
    const [filter, setFilter] = useState('stargazerCount');
    const [filteredRepos, setFilteredRepos] = useState([]);

    const LIMIT = 9;

    useEffect(() => {
        const sortedByName = repos.sort((a, b) => a.name.localeCompare(b.name));
        const sorted = sortedByName.sort((a, b) => b[filter] - a[filter]);

        const sliced = sorted.slice(0, LIMIT);

        setFilteredRepos(sliced);
    }, [filter, repos]);

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

                {/* <FlipMove staggerDurationBy={0.2}> */}
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
                        <RepoCard key={repo.id} repo={repo} />
                    ))}
                </SimpleGrid>
                {/* </FlipMove> */}
            </Box>
        </Container>
    );
};

export default Repos;
