import { Heading } from '@chakra-ui/react';
const SimpleHeading = ({ title }) => {
    return (
        <Heading
            as='h2'
            size='xl'
            textTransform='uppercase'
            fontWeight='light'
            fontFamily='Poppins'
            textAlign='center'
        >
            {title}
        </Heading>
    );
};

export default SimpleHeading;
