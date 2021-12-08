import { useEffect, useMemo, useState } from 'react';
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
import GithubAPI from '../../services/githubAPI';
import { getReposPerLang } from '../../utils/getReposPerLang';

const Stats = ({ name }) => {
    const [topLangs, setTopLangs] = useState([]);
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

    const github = useMemo(() => new GithubAPI(), []);

    useEffect(() => {
        async function getPieData() {
            github.getRepos('Rahat47').then(data => {
                const langs = getReposPerLang(data);

                // langs is an object which contains a key named null, which needs to be removed
                delete langs.null;
                const _data = [];
                for (let key in langs) {
                    // push the object to data
                    _data.push({
                        name: key,
                        value: langs[key],
                        fill: randomColor(),
                    });
                }
                setTopLangs(_data);
            });
        }

        getPieData();
    }, [github]);

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
                    <h1>Chart </h1>
                    <h1>Chart </h1>
                </SimpleGrid>
            </Box>
        </Container>
    );
};

export default Stats;
