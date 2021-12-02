import { Stack, Button } from '@chakra-ui/react';
import { RiExternalLinkLine } from 'react-icons/ri';
import { contactExternalLinks } from '../assets/data/links';

const ContactSocialHandle = () => {
    return (
        <Stack
            direction={['column', 'row']}
            mt={{ base: 5, sm: 8 }}
            justifyContent={{ sm: 'center', lg: 'start' }}
            spacing={4}
        >
            {contactExternalLinks.map(link => (
                <Button
                    key={link.key}
                    as='a'
                    href={link.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    colorScheme={link.color}
                    size='lg'
                    rounded='full'
                    variant='ghost'
                    rightIcon={<RiExternalLinkLine />}
                >
                    {link.name}
                </Button>
            ))}
        </Stack>
    );
};

export default ContactSocialHandle;
