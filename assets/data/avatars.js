import { BsInstagram, BsTwitter } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineFacebook } from "react-icons/md";
import { VscGithubAlt } from "react-icons/vsc";

export const avatars = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/rayhanhossain.rahat.5/',
        icon: <MdOutlineFacebook />,
        color: '#1877F2',
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/rh_rahat_dev',
        icon: <BsTwitter />,
        color: '#1DA1F2',
    },
    {
        name: 'Github',
        url: 'https://github.com/Rahat47',
        icon: <VscGithubAlt />,
        color: '#181717',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/rh.rahat0047/',
        icon: <BsInstagram />,
        color: '#E4405F',
    },
    {
        name: 'Email',
        url: 'mailto:djrayhan8@gmail.com',
        icon: <IoMailOutline />,
        color: '#0077B5',
    },
];