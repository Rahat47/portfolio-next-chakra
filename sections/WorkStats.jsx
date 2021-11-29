import { Box, chakra, SimpleGrid } from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { StatsCard } from '../components';

export default function WorkStats() {
    return (
        <Box
            as='section'
            maxW='5xl'
            mb={5}
            mx={'auto'}
            px={{ base: 2, sm: 12, md: 17 }}
            py={5}
        >
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                pb={10}
                fontWeight={'bold'}
            >
                Things I’ve Done So Far
            </chakra.h1>
            <SimpleGrid
                columns={{ base: 1, md: 3 }}
                spacing={{ base: 5, lg: 8 }}
            >
                <StatsCard
                    title={'Projects'}
                    stat={85}
                    suffix={' +'}
                    icon={<BsPerson size={'3em'} />}
                />
                <StatsCard
                    title={'Lines Of Code'}
                    stat={50000}
                    suffix={' +'}
                    icon={<FiServer size={'3em'} />}
                />
                <StatsCard
                    title={'Made Dream Projects For'}
                    stat={13}
                    suffix={' Clients'}
                    icon={<GoLocation size={'3em'} />}
                />
            </SimpleGrid>
        </Box>
    );
}
