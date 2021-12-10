import { HeroComponent, Stats } from '../../components/GithubPageComps';
import { getUser } from '../../services/githubGQL';

const GithubPage = ({ user }) => {
    return (
        <>
            <HeroComponent user={user} />
            <Stats name={user.name} />
        </>
    );
};

export default GithubPage;

export const getStaticProps = async () => {
    const user = await getUser('Rahat47');

    return {
        props: {
            user,
        },
    };
};
