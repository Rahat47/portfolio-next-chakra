import {
    Flex,
    Icon,
    Box,
    chakra,
    useColorModeValue,
    SimpleGrid,
} from '@chakra-ui/react';

const Tech = ({ skill }) => {
    return (
        <SimpleGrid
            transition='all 0.2s ease-in-out'
            _hover={{
                cursor: 'pointer',
                color: skill.color,
            }}
            fontSize='lg'
            columns={2}
            spacingX={20}
        >
            <Flex shrink={1}>
                <Icon
                    boxSize={8}
                    mt={1}
                    mr={2}
                    color={useColorModeValue('brand.500', 'brand.300')}
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    as={skill.Icon}
                />
            </Flex>
            <Box>
                <chakra.span mt={2} color='inherit'>
                    {skill.name}
                </chakra.span>
            </Box>
        </SimpleGrid>
    );
};

export default Tech;
