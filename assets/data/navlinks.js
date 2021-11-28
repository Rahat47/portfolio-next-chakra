import { FcAbout, FcCommandLine, FcAssistant } from 'react-icons/fc'

export const navLinks = [
    {
        id: 1,
        name: "About",
        url: "/about",
        Icon: <FcAbout />
    },
    {
        id: 2,
        name: "Projects",
        url: "/projects",
        Icon: <FcCommandLine />
    },
    {
        id: 3,
        name: "Contact",
        url: "/contact",
        Icon: <FcAssistant />
    },
]