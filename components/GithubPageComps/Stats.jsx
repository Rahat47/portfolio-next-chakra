import { useEffect, useState, useCallback } from 'react';
import {
    Container,
    Box,
    useColorModeValue,
    SimpleGrid,
    Heading,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { PieTopLang, MostStarredLine, CommitCalender } from '.';
import {
    getCommits,
    getUserReposPrimayLang,
    getLinesOfCode,
} from '../../services/githubGQL';
import moment from 'moment';

const Stats = ({ name, username }) => {
    const [topLangs, setTopLangs] = useState([]);
    const [starsByLangs, setStarsByLangs] = useState([]);
    const [commitsPerDay, setCommitsPerDay] = useState([]);

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

    // This function first fetches all the repositories of the user, only the primary language is fetched,
    // then It counts the number of repositories in each language
    // finally it creates an array of objects with the language and the number of repositories in that language for the chart to understand
    const getTopLangs = useCallback(async () => {
        const repos = await getUserReposPrimayLang(username);

        const topLangs = {};
        repos.forEach(repo => {
            topLangs[repo.primaryLanguage?.name] =
                (topLangs[repo.primaryLanguage?.name] || 0) + 1;
        });

        delete topLangs.null;
        delete topLangs.undefined;

        const topLangsArr = Object.keys(topLangs).map(key => ({
            id: key,
            label: key,
            value: topLangs[key],
            color: randomColor(),
        }));

        setTopLangs(topLangsArr);
    }, [username]);

    const getStarsByLangs = useCallback(async () => {
        const repos = await getUserReposPrimayLang(username);

        const langs = {};

        repos.forEach(repo => {
            langs[repo.primaryLanguage?.name] =
                (langs[repo.primaryLanguage?.name] || 0) + repo.stargazerCount;
        });

        delete langs.null;
        delete langs.undefined;

        const starsByLangs = Object.keys(langs).map(key => ({
            name: key,
            value: langs[key],
            fill: randomColor(),
        }));

        setStarsByLangs(starsByLangs);
    }, [username]);

    const getCommitsPerDay = useCallback(async () => {
        const commitsPerRepos = await getCommits(username);

        const commitsPerDay = [];

        commitsPerRepos.forEach(repo => {
            repo.contributions.nodes.forEach(contribution => {
                commitsPerDay.push({
                    day: moment(contribution.occurredAt).format('YYYY-MM-DD'),
                    value: contribution.commitCount,
                });
            });
        });

        setCommitsPerDay(commitsPerDay);
    }, [username]);

    // const getTotalLinesOfCode = useCallback(async () => {
    //     const { totalLinesOfcode } = await getLinesOfCode('Rahat47');

    //     console.log(totalLinesOfcode);
    // }, []);

    useEffect(() => {
        getTopLangs();
        getStarsByLangs();
        getCommitsPerDay();
        // getTotalLinesOfCode();
    }, [getStarsByLangs, getTopLangs, getCommitsPerDay]);

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

                <SimpleGrid mt={6} columns={1} placeItems='center' gap={6}>
                    <Box
                        rounded='lg'
                        bg='gray.700'
                        shadow='xl'
                        height='xl'
                        width='full'
                        padding={useBreakpointValue({
                            base: 0,
                            lg: 20,
                        })}
                        pt={2}
                        overflow={'hidden'}
                    >
                        <Text
                            py={4}
                            fontSize='2xl'
                            fontWeight={300}
                            color={useColorModeValue('white', 'whiteAlpha.900')}
                        >
                            Top Languages
                        </Text>
                        <PieTopLang data={topLangs} />
                    </Box>

                    <Box
                        rounded='lg'
                        bg='gray.700'
                        shadow='xl'
                        height='xl'
                        width='full'
                        padding={useBreakpointValue({
                            base: 0,
                            lg: 20,
                        })}
                        pt={2}
                    >
                        <Text
                            py={2}
                            fontSize='2xl'
                            fontWeight={300}
                            color={useColorModeValue('white', 'whiteAlpha.900')}
                        >
                            Top Language By Stars
                        </Text>
                        <MostStarredLine rawData={starsByLangs} />
                    </Box>

                    <Box
                        rounded='lg'
                        bg='gray.700'
                        shadow='xl'
                        height='xl'
                        width='full'
                        padding={useBreakpointValue({
                            base: 0,
                            lg: 20,
                        })}
                        pt={2}
                    >
                        <Text
                            py={2}
                            fontSize='2xl'
                            fontWeight={300}
                            color={useColorModeValue('white', 'whiteAlpha.900')}
                        >
                            Commits This Year
                        </Text>
                        <CommitCalender data={commitsPerDay} />
                    </Box>
                </SimpleGrid>
            </Box>
        </Container>
    );
};

export default Stats;
