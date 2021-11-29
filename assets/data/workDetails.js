import { Text } from '@chakra-ui/react'

export const workDetails = [
    {
        id: 1,
        title: 'Appollo',
        link: 'https://app.tryappollo.com/',
        content: (<Text fontSize='sm'>
            Joined the team as a Backend Developer. I
            was in charge of Enriching their REST API,
            <br />
            adding new features and improving existing
            ones. Also communicating with the Frontend
            team to make sure the UI is up to date. I
            was also responsible for connecting Appollo
            API with Big E-commerce Platforms like
            Shopify and Wix.
        </Text>),
        location: "London, UK",
        type: "Full-time / Contract",
        date: "March 2020 - June 2020",
        skills: [
            "Node.js",
            "Express.js",
            "Firebase",
            "Webhooks",
            "API"
        ]
    },
    {
        id: 2,
        title: 'United Sports Hub',
        link: 'https://www.workspacify.com/',
        content: (<Text fontSize='sm'>
            Joined the team as a Frontend React Developer. I
            was in charge of the Frontend of the website,
            <br />
            adding new UI components, making Responsive and Inituative Admin Dashboard.
        </Text>),
        location: "Switzerland",
        type: "Part-time",
        date: "July 2020 - October 2020",
        skills: [
            "React",
            "Redux",
            "Redux-toolkit",
            "Material UI",

        ]
    },
    {
        id: 3,
        title: 'Cheer Music Maker',
        link: 'http://cheer-music-maker.com/',
        content: (<Text fontSize='sm'>
            Joined the team as a Full Stack. I was in charge of Both Frontend and Backend. <br />
            Primarily worked on the Frontend, adding new features and improving existing ones. <br />
            Then I Re-created their Entire PHP backend into Node.js REST API, Improving the performance and scalability.
        </Text>),
        location: "United States",
        type: "Freelance",
        date: "July 2020 - Present",
        skills: [
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "Ant Design"
        ]
    },
    {
        id: 4,
        title: 'Fiverr',
        link: 'https://www.fiverr.com/rh_rahat_47?up_rollout=true',
        content: (<Text fontSize='sm'>
            Joined Fiverr as a Freelance Developer in 2019. <br />
            working as a React Developer for various of clients througout the world. <br />
            I am a Level 1 Seller at Fiverr. Helped a lot of clients with their dream projects and helped them to achieve their goals.
        </Text>),
        location: "Remote",
        type: "Freelance",
        date: "November 2019 - Present",
        skills: [
            "React.js",
            "Redux",
            "Next.js",
            "Node.js",
            "TypeScript",
            "MongoDB",
        ]
    }
]