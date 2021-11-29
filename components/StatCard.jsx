import {
    Stat,
    Flex,
    Box,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function StatsCard({ title, stat, icon, suffix }) {
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}
        >
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        <VisibilitySensor partialVisibility>
                            {({ isVisible }) =>
                                isVisible ? (
                                    <CountUp
                                        start={0}
                                        end={parseInt(stat)}
                                        duration={2}
                                        separator=','
                                        suffix={suffix}
                                    />
                                ) : (
                                    <span>0</span>
                                )
                            }
                        </VisibilitySensor>
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}
                >
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
}

export default StatsCard;
