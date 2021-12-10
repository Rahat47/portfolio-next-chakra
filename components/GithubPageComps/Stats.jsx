import { useEffect, useMemo, useState, useCallback } from 'react';
import {
    Container,
    Box,
    useColorModeValue,
    SimpleGrid,
    Heading,
    Flex,
    Text,
} from '@chakra-ui/react';
import { PieTopLang } from '.';
import MostStarredBar from './MostStarredBar';
import { getUserRepos } from '../../services/githubGQL';

const Stats = ({ name }) => {
    const [topLangs, setTopLangs] = useState([]);
    const [topTenRepos, setTopTenRepos] = useState([]);
    const [repos, setRepos] = useState([]);

    const randomColor = () => {
        // beautiful pastel colors
        const colors = [
            '#B983FF',
            '#FFF47D',
            '#E93B81',
            '#FFCB8B',
            '#FF8B8B',
            '#BFA2DB',
            '#C2F784',
            '#B5DEFF',
            '#28FFBF',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const getTopLangs = useCallback(async () => {
        const repos = await getUserRepos('Rahat47');

        const topLangs = {};
        repos.forEach(repo => {
            topLangs[repo.primaryLanguage?.name] =
                (topLangs[repo.primaryLanguage?.name] || 0) + 1;
        });

        delete topLangs.null;
        delete topLangs.undefined;

        const topLangsArr = Object.keys(topLangs).map(key => ({
            name: key,
            value: topLangs[key],
            fill: randomColor(),
        }));

        setTopLangs(topLangsArr);
    }, []);

    useEffect(() => {
        getTopLangs();
    }, [getTopLangs]);

    return (
        <Container maxW={'7xl'} as='section'>
            <Box
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
            >
                <Heading
                    textAlign='center'
                    fontFamily='Roboto'
                    fontWeight={300}
                >
                    {name} Stats
                </Heading>

                <SimpleGrid
                    mt={6}
                    columns={{
                        base: 1,
                        md: 2,
                    }}
                    placeItems='center'
                    gap={6}
                >
                    <Box
                        rounded='lg'
                        bg='gray.700'
                        shadow='xl'
                        height='md'
                        width='full'
                    >
                        <Text py={4} fontSize='2xl' fontWeight={300}>
                            Top Languages
                        </Text>
                        <PieTopLang data={topLangs} />
                    </Box>

                    <Box
                        rounded='lg'
                        bg='gray.700'
                        shadow='xl'
                        height='md'
                        width='full'
                    >
                        {/* <MostStarredBar repoData={repos} /> */}
                    </Box>

                    <h1>Chart </h1>
                </SimpleGrid>
            </Box>
        </Container>
    );
};

export default Stats;
